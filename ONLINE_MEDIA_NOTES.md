# ZNZ Developers — Online Media Edition

Original navigation, HTML filenames, CSS/JS, layouts, text, design, and responsive fixes are preserved.

## What is included
- All 5 original HTML files, CSS, JS and .htaccess.
- Only these original local image assets: `images/ZNZ Logo Transparnets.png` and `images/znz logo white.png`.
- No bundled video, JPG, WebP or any other photo files.

## What changed
- 32 HTML/CSS media references now use remotely hosted Unsplash images.
- The homepage background video uses an externally hosted Pexels MP4 (direct file URL).
- The second video (used on homepage and About) uses Mixkit's tropical-island stock footage via CDN.
- Non-photo blue/black and patterned backgrounds are recreated with CSS gradients to keep layout closer to the original design.
- Existing logo assets are untouched.

## Critical deployment note
The site now relies on third-party CDN connectivity and bandwidth. These hotlinked URLs can be changed, blocked or rate-limited by their providers; consider publishing permitted copies to your own CDN for a production website. Live media playback was not verified in a browser because this execution environment has no outgoing container network connection. The static HTML and local path checks were performed.

## Media license / representation note
Photos are decorative Unsplash stock imagery (Unsplash License); Mixkit video should be used under the applicable Free License, and Pexels video under Pexels terms. Stock clips and photos are illustrative; they are NOT documentary footage/photos of ZNZ Developers' actual project sites. Check the final site on the deployed domain, verify the supplier terms and load performance, and only use stock visuals as representative imagery.

## Referenced media
Homepage Pexels video: https://videos.pexels.com/video-files/3139195/3139195-hd_1920_1080_30fps.mp4
Mixkit video: https://assets.mixkit.co/videos/preview/mixkit-tropical-island-landscape-view-4692-large.mp4
Mixkit source page: https://mixkit.co/free-stock-video/tropical-island-landscape-view-4692/
Pexels video host: https://www.pexels.com/
Unsplash images: https://unsplash.com/license
