# Palleturi Abbai — A Journey of Fear and Hope

This is my story, told in anime frames. I am a village boy from Denepalli.
I was afraid of everything as a child. This project follows that fear, and the
long road from my village school to Ongole, to B.Tech, and finally to Bengaluru.
Part 1 ends at a midnight phone call. What happens next stays for Part 2.

## Story status

- All 17 frames are ready now and shown on the site.
- Part 1 is complete; Part 2 continues after the midnight phone call.
- The story is told as a story. It is not a resume and not a job claim.

## The site (about 40% of this repo)

- `index.html`, `style.css`, `app.js` — the story gallery, with English and Telugu captions.
- `scenes.json` — scene titles and captions.
- `scripts/build_gallery.py` — checks which scene images exist and which captions are missing.
- `src/StoryTimeline.java` — prints the Part 1 timeline.
- `images/scene-01.webp` to `images/scene-17.webp` — the anime frames.

## DevOps around it (about 60% of this repo)

- `Dockerfile` — serves the site with nginx on Alpine.
- `docker-compose.yml` — site plus Prometheus monitoring.
- `.github/workflows/ci.yml` — validates the gallery data, checks site files,
  builds the Docker image, and runs a report-only image scan.
- `k8s/deployment.yaml` and `k8s/service.yaml` — 2-replica deployment and service.
- `ansible/deploy.yml` — copies the site to a server and starts the container.
- `monitoring/prometheus.yml` — scrape config for the site.

## Run it locally

```bash
docker compose up --build
```

Then open http://localhost:8080. No cloud cost: the site is plain static files,
and the public site deploys through GitHub Pages, which is free.

## How it deploys

1. Push to `main`.
2. CI validates the gallery data and builds the Docker image.
3. GitHub Pages serves the static site from the same repo.
4. Docker, Kubernetes and Ansible files here are the same ones I use to show
   how this site runs anywhere else.
