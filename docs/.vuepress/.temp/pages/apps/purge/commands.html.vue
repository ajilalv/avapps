<template><h3 id="dwg-purge" tabindex="-1"><a class="header-anchor" href="#dwg-purge" aria-hidden="true">#</a> DWG-PURGE</h3>
<p><code>{{$frontmatter.cmd1}}</code>, will purge the current drawing of its unused AutoCAD items as well as DGN-related linetypes.
To purge the current drawing enter <code>{{$frontmatter.cmd1}}</code> at the command line.
Once the purge is finished, AutoCAD Text Window will pop up with the result as show below.</p>
<p><img src="/img/purgeresult.jpg" alt="Purge Result"></p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>If <code>{{$frontmatter.cmd1}}</code> is taking long time to purge the drawing, then use <code>{{$frontmatter.cmd2}}</code> command.</p>
</div>
<p>While using <code>{{$frontmatter.cmd1}}</code>, if the current drawing has any xref attached that has unused DGN data
a dialog box will be displayed with the list of DGN data affected Xref's.
You will have the option to either Purge the Xref or not.</p>
<h3 id="dwg-purge-batch" tabindex="-1"><a class="header-anchor" href="#dwg-purge-batch" aria-hidden="true">#</a> DWG-PURGE-BATCH</h3>
<p>This command can be used to purge multiple drawings.
This command will open the drawing files in the background</p>
<p><strong>How to know the existence of DGN linetypes/Textstyles ?</strong></p>
<p>Follow below steps to find the existence of DGN linetypes in your drawing.</p>
<ul>
<li>Takes more time than usual to copy the objects to clipboard.</li>
<li>In the Linetype Mangaer dialog box there are number of unknown Linetypes which are not using.</li>
<li>Existence of unknown Textstyles in the Text style list.</li>
<li>Drawing file size is too heavy even the file contains less data.</li>
</ul>
<p><strong>Batch Dialog Box</strong>
<img src="/img/batch.jpg" alt="Batch Window"></p>
<p><strong>Batch Settings</strong>
<img src="/img/batchoptions.jpg" alt="Batch Window"></p>
</template>
