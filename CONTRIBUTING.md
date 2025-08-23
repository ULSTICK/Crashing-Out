# Contributing to Desolate Planet

## Prerequisites

- Java (for the packwiz installer bootstrap and Forge installer).
- Clone/pull this repo.

## Contributing on Windows

### Environment Setup

1. Install **packwiz** by following the official guide: [https://packwiz.infra.link/installation](https://packwiz.infra.link/installation/). Ensure packwiz is added to your PATH.
2. Run the `initialize-dev-environment.bat` script located in the `packwiz-scripts` folder. The script will download all required files.
3. When complete, the repository’s root folder is now playable!

### Playing the Modpack Locally

1. [Install Forge 1.20.1](https://files.minecraftforge.net/net/minecraftforge/forge/index_1.20.1.html)**.**
2. In the Minecraft Launcher, create a new installation.
    1. Set the version to the appropriate Forge version.
    2. Set the game directory to your repository’s directory.
    3. Under JVM arguments, increase your allocated RAM to 6-8GB (change `-Xmx2G` to `-Xmx6G` or `-Xmx8G`).
    4. Save the installation.
3. Select the new installation and click **Play**.

### Making Changes to the Modpack

- **Configs:** edit files in the repo root (`config/`, `kubejs/`, `defaultconfigs/` etc.).
- **Mods:** all mod changes must be done with the packwiz CLI, and **must be made on both pack variants**:
    - Add a Modrinth mod:
        
        `packwiz modrinth add <url|slug|search> --pack-file ".\packwiz-modrinth\pack.toml"`
        
    - Add a CurseForge mod:
        
        `packwiz curseforge add <url|slug|search> --pack-file ".\packwiz-curseforge\pack.toml"`
        
    - Update a mod:
        
        `packwiz update <name> --pack-file ".\packwiz-modrinth\pack.toml"`
        
        `packwiz update <name> --pack-file ".\packwiz-curseforge\pack.toml"`
        
    - Remove a mod:
        
        `packwiz remove <name> --pack-file ".\packwiz-modrinth\pack.toml"`
        
        `packwiz remove <name> --pack-file ".\packwiz-curseforge\pack.toml"`
        
- When your changes are complete, submit a pull request. Make sure to document your changes and avoid committing unnecessary files.

### Exporting the Modpack

- To **Modrinth:** run `packwiz_scripts\pack-export-modrinth.bat`.
- To **CurseForge:** run `packwiz_scripts\pack-export-curseforge.bat`.
- To **Server Pack:** run, in order:
    1. `packwiz_scripts\pack-export-server-1-forge.bat` 
    2. `packwiz_scripts\pack-export-server-2-mods.bat` 
    3. `packwiz_scripts\pack-export-server-3-export.bat`

All exported modpack files are saved to to `packwiz-builds/`.

---

## Contributing on macOS / Linux

The automation scripts located in `packwiz-scripts` are Windows-only. However, a local environment can still be set up with a bit more manual work.

### Environment Setup

1. Install **packwiz** by following the official guide: [https://packwiz.infra.link/installation](https://packwiz.infra.link/installation/).
2. Serve the Modrinth variant from `packwiz-modrinth/`:
    
    `cd ./packwiz-modrinth && packwiz serve -p 8080`
    
3. Download the [packwiz installer bootstrapper](https://github.com/packwiz/packwiz-installer-bootstrap/releases/latest/download/packwiz-installer-bootstrap.jar) and run it:
    
    `java -jar packwiz-installer-bootstrap.jar http://localhost:8080/pack.toml`
    
    *See the official [tutorial for the packwiz-installer](https://packwiz.infra.link/tutorials/installing/packwiz-installer/) for more information.*
    
4. When complete, you can close the packwiz installation server. The repository’s root folder should now be playable!

### Playing the Modpack Locally

> *See the Windows instructions above.*
> 

### Making Changes to the Modpack

> *See the Windows instructions above.*
> 

### Exporting the Modpack

The Windows scripts automatically copy the relevant folders and export the modpack. To export on macOS / Linux, you will have to manually perform the tasks the scripts do.

- To **Modrinth:**
    1. Copy the relevant folders and files from the root folder into `packwiz-modrinth/`. You can find the default list of files in `packwiz-scripts/configs/client-copy-list`.
    2. Run `packwiz modrinth export --pack-file "./packwiz-modrinth/pack.toml"`.
    3. Remove the temporary files copied into `packwiz-modrinth/`.
- To **CurseForge:**
    1. Copy the relevant folders and files from the root folder into `packwiz-curseforge/`. You can find the default list of files in `packwiz-scripts/configs/client-copy-list`.
    2. Run `packwiz curseforge export --pack-file "./packwiz-curseforge/pack.toml"`.
    3. Remove the temporary files copied into `packwiz-curseforge/`.