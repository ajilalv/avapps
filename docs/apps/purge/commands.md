---
title: Commands
cmd1: DWG-PURGE
cmd2: DWG-PURGE-BATCH
---

### DWG-PURGE
<code>{{$frontmatter.cmd1}}</code>, will purge the current drawing of its unused AutoCAD items as well as DGN-related linetypes.
To purge the current drawing enter <code>{{$frontmatter.cmd1}}</code> at the command line.
Once the purge is finished, AutoCAD Text Window will pop up with the result as show below.

![Purge Result](/img/purgeresult.jpg)

::: tip
If <code>{{$frontmatter.cmd1}}</code> is taking long time to purge the drawing, then use <code>{{$frontmatter.cmd2}}</code> command.
:::

While using <code>{{$frontmatter.cmd1}}</code>, if the current drawing has any xref attached that has unused DGN data
a dialog box will be displayed with the list of DGN data affected Xref's.
You will have the option to either Purge the Xref or not.


### DWG-PURGE-BATCH
This command can be used to purge multiple drawings.
This command will open the drawing files in the background


**How to know the existence of DGN linetypes/Textstyles ?**

Follow below steps to find the existence of DGN linetypes in your drawing. 
- Takes more time than usual to copy the objects to clipboard.
- In the Linetype Mangaer dialog box there are number of unknown Linetypes which are not using.
- Existence of unknown Textstyles in the Text style list.
- Drawing file size is too heavy even the file contains less data.

**Batch Dialog Box**
![Batch Window](/img/batch.jpg)

**Batch Settings**
![Batch Window](/img/batchoptions.jpg)