"""Build scenes.json for the Palleturi Abbai gallery.

Scans images/scene-NN.webp and writes a gallery data file with the
titles and captions kept in scenes.json. Run from the repo root:

    python3 scripts/build_gallery.py

The script only reports which scene files exist; it never edits captions.
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
IMAGES = ROOT / "images"
DATA = ROOT / "scenes.json"


def main():
    found = sorted(IMAGES.glob("scene-*.webp"))
    numbers = []
    for path in found:
        match = re.match(r"scene-(\d+)\.webp$", path.name)
        if match:
            numbers.append(int(match.group(1)))
    if DATA.exists():
        scenes = json.loads(DATA.read_text(encoding="utf-8"))
        have = {s["id"] for s in scenes}
    else:
        scenes, have = [], set()
    missing = [n for n in numbers if n not in have]
    print(f"scene images on disk: {numbers}")
    print(f"scenes in data file: {sorted(have)}")
    if missing:
        print(f"images without captions (add them to scenes.json): {missing}")
    else:
        print("every image has a caption entry.")


if __name__ == "__main__":
    main()
