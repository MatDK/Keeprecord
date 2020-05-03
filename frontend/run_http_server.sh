readonly root=$(git rev-parse --show-toplevel)
cd $root/frontend/static
python3 -m http.server 8000
