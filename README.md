# Overleaf V6 NG

Overleaf V6 NG (**N**ext **G**eneration) is a custom fork of Overleaf, based on [Overleaf CEP](https://github.com/yu-i-i/overleaf-cep). It offers direct integration into Nextcloud as well as a few other features. 

## Overleaf CEP base
The following commit of the [Overleaf CEP](https://github.com/yu-i-i/overleaf-cep) has been used as this fork's base:
```
ae07e781ab20dac2378420e5cf7a47f7d8bccbb5
```

## Running Overleaf as an integrated app
To use Overleaf as an integrated app in a host system (like Nextcloud), you need to set the environment variable `OVERLEAF_INTEGRATION` to `true`. This will activate all changes that are necessary for Overleaf to run integrated into a host system.

## Local deployment
The directory `deployment/local` contains files to run a local deployment alongside a Nextcloud. The `Makefile` located in the project root directory can be used to build and run this deployment. Before using this, though, read the instructions in[`LOCAL_DEPLOYMENT.md`](deployment/local/LOCAL_DEPLOYMENT.md) carefully, as it will _not_ work out-of-the-box!

## Changelog
A full changelog can be found [here](./CHANGELOG.md).
