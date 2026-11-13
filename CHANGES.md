# Additional changes in Overleaf V6 NG

## Deployment
Overleaf V6 NG comes with its own Helm charts, which can be found in `/deployment/charts`. As of now, these charts are still work-in-progress and probably won't work yet.

Furthermore, all files necessary for the local deployment can be found in `/deployment/local`. In addition, the project root's `Makefile` can be used to quickly run a local version of Overleaf V6 NG inside a Nextcloud (see [`LOCAL_DEPLOYMENT.md`](deployment/local/LOCAL_DEPLOYMENT.md) for details).

## Sandboxed compiler
We use our own sandboxed compiler system, which can be found in `/sandboxed-compiler`.
