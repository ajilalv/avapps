<template><h1 id="frequently-asked-questions" tabindex="-1"><a class="header-anchor" href="#frequently-asked-questions" aria-hidden="true">#</a> Frequently Asked Questions</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#will-this-app-work-on-autocad-lt">Will this app work on AutoCAD LT ?</RouterLink></li><li><RouterLink to="#app-installed-location">App Installed Location 📁</RouterLink></li><li><RouterLink to="#how-to-load-the-app-manually">How to load the app manually ?</RouterLink></li><li><RouterLink to="#how-to-avoid-manual-loading">How to avoid manual loading ?</RouterLink></li><li><RouterLink to="#app-icons-are-not-visible">App icons are not visible</RouterLink></li><li><RouterLink to="#dgn-data-not-purging">DGN data not purging</RouterLink></li><li><RouterLink to="#purge-settings-folder-not-found">Purge Settings folder not found</RouterLink></li><li><RouterLink to="#enullobjectid-error">eNullObjectId error</RouterLink></li><li><RouterLink to="#change-system-variables">Change System Variables</RouterLink></li></ul></nav>
<h2 id="will-this-app-work-on-autocad-lt" tabindex="-1"><a class="header-anchor" href="#will-this-app-work-on-autocad-lt" aria-hidden="true">#</a> Will this app work on AutoCAD LT ?</h2>
<div class="custom-container warning"><p class="custom-container-title">Autocad LT Limitations</p>
<p>Autocad LT does not support any API features (Control drawings and databases with ActiveX, VBS,..
AutoLisp, Visual LISP, ObjectARX, JavaScript, and .NET.)</p>
</div>
<p>So unfortunately this app will <strong>not</strong> work with AutoCAD LT.</p>
<h2 id="app-installed-location" tabindex="-1"><a class="header-anchor" href="#app-installed-location" aria-hidden="true">#</a> App Installed Location 📁</h2>
<ul>
<li>The app files are installed to below location.</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">App Location</p>
<p>{{$frontmatter.approot}}</p>
</div>
<h2 id="how-to-load-the-app-manually" tabindex="-1"><a class="header-anchor" href="#how-to-load-the-app-manually" aria-hidden="true">#</a> How to load the app manually ?</h2>
<p>After installing Drawing Purge , if you are not able to run the command or can't see the command in ribbon.
Please try the following.</p>
<p><img src="/img/applocation.png" alt="App Folder"></p>
<ul>
<li>
<p>In Autocad command line type  <code><strong>NETLOAD</strong></code> and select AVVADrawingPurge08-20xx.dll from below location</p>
<p><code>{{$frontmatter.approot}}\Contents\Windows</code></p>
</li>
<li>
<p>Choose the folder based on the CAD version you have.</p>
</li>
<li>
<p>Select AVVADrawingPurge08-20xx.dll and click to load.</p>
</li>
<li>
<p>Once the file is loaded, try to run  <code><strong>DWG-PURGE</strong></code>or<code><strong>DWG-PURGE-BATCH</strong></code>command.</p>
</li>
</ul>
<h2 id="how-to-avoid-manual-loading" tabindex="-1"><a class="header-anchor" href="#how-to-avoid-manual-loading" aria-hidden="true">#</a> How to avoid manual loading ?</h2>
<p>If you want to avoid loading the app manually for each session of AutoCAD, try the following.</p>
<ul>
<li>Download this lisp file and save to your computer.</li>
<li>At the command line type <code><strong>APPLOAD</strong></code>and select the lisp file you downloaded or drag/drop the lisp file to AutoCAD</li>
<li>Click <strong>Load</strong> and close the dialog.</li>
<li>Then at the command line type <code><strong>LoadDwgPurge</strong></code>and enter</li>
</ul>
<h2 id="app-icons-are-not-visible" tabindex="-1"><a class="header-anchor" href="#app-icons-are-not-visible" aria-hidden="true">#</a> App icons are not visible</h2>
<p>After successful installation of Drawing Purge, if you are not able to see the ribbon or menu.
Please try the following steps.</p>
<ul>
<li>At the command line type <code>CUILOAD</code> this should bring a window as shown in the below image.</li>
</ul>
<p><img src="/img/cuiload.png" alt="CUILOAD"></p>
<ul>
<li>
<p>If the drawing purge group already there, <strong>Unload</strong> it and then click <strong>Browse</strong> and select
AjilalVijayan_DrawingPurge.cuix from folder</p>
<p><code>{{$frontmatter.approot}}\Contents\Resources</code></p>
</li>
<li>
<p>And click the  <strong>Load</strong> button.</p>
</li>
<li>
<p>Close the CUILOAD window and check whether the app is visible in the ribbon.</p>
</li>
<li>
<p>If the app is not visible, restart autocad and check again.</p>
</li>
</ul>
<h2 id="dgn-data-not-purging" tabindex="-1"><a class="header-anchor" href="#dgn-data-not-purging" aria-hidden="true">#</a> DGN data not purging</h2>
<p>If the app is not deleting the dgn data after detecting, then please do the following.
Open the drawing and copy paste the below LISP code at the command line and hit ENTER.</p>
<div class="custom-container tip"><p class="custom-container-title">LISP Code</p>
<p>(dictremove (namedobjdict) &quot;ACAD_DGNLINESTYLECOMP&quot;)</p>
</div>
<p>Then try the command again.</p>
<h2 id="purge-settings-folder-not-found" tabindex="-1"><a class="header-anchor" href="#purge-settings-folder-not-found" aria-hidden="true">#</a> Purge Settings folder not found</h2>
<p>By default, the purge settings files are saved to below location.</p>
<p><code>{{$frontmatter.approot}}Contents\DwgPurgeSettings</code></p>
<p>You can save the folder <strong>DwgPurgeSettings</strong> to any location you prefer to share the purge settings with other users.
If you are receiving an error as shown below, which says the purge settings folder is not found,</p>
<p><img src="/img/folder.jpg" alt="Folder not found"></p>
<p>then click <code>OK</code> and then browse to the default location or the location where you have saved the settings folder.
After selecting the folder, click <code>Reset</code> button</p>
<p><img src="/img/resetfolder.jpg" alt="Folder not found"></p>
<h2 id="enullobjectid-error" tabindex="-1"><a class="header-anchor" href="#enullobjectid-error" aria-hidden="true">#</a> eNullObjectId error</h2>
<p><img src="/img/nullobject.jpg" alt="App Folder"></p>
<p><strong>While using DWG-PURGE command, if you are getting this error please try the following.</strong></p>
<ul>
<li>At the command line type <code>AUDIT</code></li>
<li>Fix any errors detected? [Yes/No] Yes</li>
<li>This may take some time according to the size of the file.</li>
<li>Once 'Audit' is finished, save the drawing and close it.</li>
<li>Open the drawing again, and check whether the DWG-PURGE command is working.</li>
</ul>
<p><strong>If the error occurs after running AUDIT, then please follow the below steps.</strong></p>
<ul>
<li>Enter <code>DXFOUT</code> in the drawing and save the dxf file in any location.</li>
<li>Open a new drawing and import the dxf file by using <code>DXFIN</code></li>
<li>Again enter <code>DXFOUT</code>in this new drawing and save the dxf file at any location.</li>
<li>Open a new drawing and import the dxf file created in step 3 by using <code>DXFIN</code>.</li>
<li>Save this drawing and run <code>DWG-PURGE</code> command.</li>
</ul>
<h2 id="change-system-variables" tabindex="-1"><a class="header-anchor" href="#change-system-variables" aria-hidden="true">#</a> Change System Variables</h2>
<p>To change the System Variables values, please open the <strong>SysVarTemplate.dwg</strong> file and change the values in that drawing.</p>
<p><strong>SysVarTemplte.dwg</strong> can be located in the app settings folder</p>
<p><code>{{$frontmatter.approot}}Contents\DwgPurgeSettings</code></p>
</template>
