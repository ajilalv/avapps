---
title: FAQs
sidebarDepth: 2
approot: C:\Users\Username\AppData\Roaming\Autodesk\ApplicationPlugins\AVVADwgPurge.bundle
---
# Frequently Asked Questions
[[toc]]


## Will this app work on AutoCAD LT ?
::: warning Autocad LT Limitations
Autocad LT does not support any API features (Control drawings and databases with ActiveX, VBS,..
AutoLisp, Visual LISP, ObjectARX, JavaScript, and .NET.)
:::

So unfortunately this app will **not** work with AutoCAD LT.

## App Installed Location :file_folder:
- The app files are installed to below location.
::: tip App Location 
{{$frontmatter.approot}}
:::


## How to load the app manually ?
After installing Drawing Purge , if you are not able to run the command or can't see the command in ribbon.
Please try the following.

![App Folder](/img/applocation.png)
- In Autocad command line type  <code>**NETLOAD**</code> and select AVVADrawingPurge08-20xx.dll from below location

    <code>{{$frontmatter.approot}}\Contents\Windows</code>
- Choose the folder based on the CAD version you have.
- Select AVVADrawingPurge08-20xx.dll and click to load.
- Once the file is loaded, try to run  <code>**DWG-PURGE**</code>or<code>**DWG-PURGE-BATCH**</code>command.

## How to avoid manual loading ?
If you want to avoid loading the app manually for each session of AutoCAD, try the following.

- Download this lisp file and save to your computer.
- At the command line type <code>**APPLOAD**</code>and select the lisp file you downloaded or drag/drop the lisp file to AutoCAD
- Click **Load** and close the dialog.
- Then at the command line type <code>**LoadDwgPurge**</code>and enter

## App icons are not visible
After successful installation of Drawing Purge, if you are not able to see the ribbon or menu.
Please try the following steps.
- At the command line type <code>CUILOAD</code> this should bring a window as shown in the below image.

![CUILOAD](/img/cuiload.png)
-  If the drawing purge group already there, **Unload** it and then click **Browse** and select 
    AjilalVijayan_DrawingPurge.cuix from folder

    <code>{{$frontmatter.approot}}\Contents\Resources</code>

-  And click the  **Load** button.
-  Close the CUILOAD window and check whether the app is visible in the ribbon.
-  If the app is not visible, restart autocad and check again.

## DGN data not purging
If the app is not deleting the dgn data after detecting, then please do the following.
Open the drawing and copy paste the below LISP code at the command line and hit ENTER.
::: tip LISP Code
(dictremove (namedobjdict) "ACAD_DGNLINESTYLECOMP")
:::
Then try the command again.

## Purge Settings folder not found
By default, the purge settings files are saved to below location.

<code>{{$frontmatter.approot}}Contents\DwgPurgeSettings</code>

You can save the folder **DwgPurgeSettings** to any location you prefer to share the purge settings with other users.
If you are receiving an error as shown below, which says the purge settings folder is not found,

![Folder not found](/img/folder.jpg)

then click <code>OK</code> and then browse to the default location or the location where you have saved the settings folder.
After selecting the folder, click <code>Reset</code> button

![Folder not found](/img/resetfolder.jpg)

## eNullObjectId error
![App Folder](/img/nullobject.jpg)

**While using DWG-PURGE command, if you are getting this error please try the following.**

- At the command line type <code>AUDIT</code>
- Fix any errors detected? [Yes/No] Yes
- This may take some time according to the size of the file.
- Once 'Audit' is finished, save the drawing and close it.
- Open the drawing again, and check whether the DWG-PURGE command is working.

**If the error occurs after running AUDIT, then please follow the below steps.**

- Enter <code>DXFOUT</code> in the drawing and save the dxf file in any location.
- Open a new drawing and import the dxf file by using <code>DXFIN</code>
- Again enter <code>DXFOUT</code>in this new drawing and save the dxf file at any location.
- Open a new drawing and import the dxf file created in step 3 by using <code>DXFIN</code>.
- Save this drawing and run <code>DWG-PURGE</code> command.

## Change System Variables
To change the System Variables values, please open the **SysVarTemplate.dwg** file and change the values in that drawing.

**SysVarTemplte.dwg** can be located in the app settings folder

<code>{{$frontmatter.approot}}Contents\DwgPurgeSettings</code>