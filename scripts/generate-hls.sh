#!/bin/bash

# Make sure FFmpeg is installed
if ! command -v ffmpeg &> /dev/null
then
    echo "FFmpeg is not installed. Please install it before running this script."
    exit
fi

# Navigate to script's directory
cd "$(dirname "$0")/.." || exit

# Input and Output paths
INPUT="./public/input.mp4"
OUTPUT_DIR="./public/hls"

# Check input exists
if [ ! -f "$INPUT" ]; then
    echo "Input video not found at $INPUT"
    echo "Please add 'input.mp4' to the public folder."
    exit
fi

# Clear previous output
rm -rf "$OUTPUT_DIR"
mkdir -p "$OUTPUT_DIR"

# Run FFmpeg to generate HLS
ffmpeg -i "$INPUT" \
  -preset veryfast -g 48 -sc_threshold 0 \
  -map 0:0 -map 0:1 -map 0:0 -map 0:1 -map 0:0 -map 0:1 -map 0:0 -map 0:1 \
  -s:v:0 1920x1080 -c:v:0 libx264 -b:v:0 5000k \
  -s:v:1 1280x720  -c:v:1 libx264 -b:v:1 2800k \
  -s:v:2 854x480   -c:v:2 libx264 -b:v:2 1400k \
  -s:v:3 640x360   -c:v:3 libx264 -b:v:3 800k \
  -c:a copy -f hls -hls_time 4 -hls_playlist_type vod \
  -master_pl_name master.m3u8 \
  -var_stream_map "v:0,a:0 v:1,a:1 v:2,a:2 v:3,a:3" \
  "$OUTPUT_DIR/stream_%v.m3u8"

echo "HLS files generated in $OUTPUT_DIR"
