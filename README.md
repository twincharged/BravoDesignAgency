## Progress

Prof Lyman: The home page uses an mp4 video. If you want, I can create a fallback ogg (if you're using a different browser than Chrome, especially FF). And the little bobbing arrow on the home page isn't Flash, it's @keyframes. I tried to make it fairly subtle and not annoying.

Got the navbar. The misc.css was missing. - Joseph

Ah ok, didnt see that css. Thanks, - Arthur

**Carly**: Can we toss the branch "carly-working"? - Joseph

**Arthur**: If you unlink your own stylesheet, the page looks very vertical, but fairly normal. It may be easier to work backwards like that rather than forwards to find the problem.

## Bugs

Due to Safari's aggressive memory maintainence, (even with preserve-3d & backface-visibility) I'm unable to force sufficient hardware acceleration to allow instant redirects via navbar links (due to anchor hover effect | it's a delay of about 200ms | only Safari on a MBA 2014). It works perfectly in Chrome, FF, IE, etc. - Joseph




## Other


Content rights:

The logo was done by me, Joseph
The UI faces on the landing page are open-source for non-commercial: http://uifaces.com
The landing video is open-source (Creative Commons): http://www.videvo.net/video/high-falls-time-lapse/456
The faces in the about section are our own.
The arrow on the landing page is open source and found here: http://codepen.io/dodozhang21/pen/siKtp (The code's not quite the same)

