# Overleaf V6 NG
Overleaf V6 NG (**N**ext **G**eneration) is a custom fork of Overleaf, based on [Overleaf CEP](https://github.com/yu-i-i/overleaf-cep). It offers direct integration into Nextcloud as well as a few other features. 

## Overleaf CEP base
The following commit of the [Overleaf CEP](https://github.com/yu-i-i/overleaf-cep) has been used as this fork's base:
```
ae07e781ab20dac2378420e5cf7a47f7d8bccbb5
```

## Philosophy of changes
- Changes made to the original code are usually outsourced into separate files and injected into the original files with as little modifications as possible.
- All files that act as modificators to the original ones have an extra `.ng` before their actual extension (e.g., `FilePicker.ng.ts`). 
- Modifications to the original sources are enclosed in blocks marked with `-- BEGIN NG --` and ` -- END NG --` comments.
- Further additions that do not alter the original sources aren't marked in special ways, but are usually documented in some way in [`CHANGES.md`](./CHANGES.md).

The goal is to keep merge conflicts as minimal and as easy to resolve as possible.

**Note**: Unlike in our previous customized Overleaf V6 version, we no longer document how to apply our changes to a vanilla copy of Overleaf. This is due to the fact that this repository is a true, customized fork.

## Running Overleaf as an integrated app
To use Overleaf as an integrated app in a host system (like Nextcloud), you need to set the environment variable `OVERLEAF_INTEGRATION` to `true`. This will activate all changes that are necessary for Overleaf to run integrated into a host system.

## Local deployment
The directory `/deployment/local` contains files to run a local deployment alongside a Nextcloud. The `Makefile` located in the project root directory can be used to build and run this deployment. Before using this, though, read the instructions in [`LOCAL_DEPLOYMENT.md`](deployment/local/LOCAL_DEPLOYMENT.md) carefully, as it will _not_ work out-of-the-box!

## Changelog
A full changelog can be found [here](./CHANGELOG.md).
