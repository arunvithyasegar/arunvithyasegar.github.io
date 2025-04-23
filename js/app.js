// Disable right-click context menu
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
});

// Disable keyboard shortcuts for developer tools
document.addEventListener('keydown', (e) => {
    // Prevent F12 key
    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        return false;
    }
    
    // Prevent Ctrl+Shift+I (Inspect Element)
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
        e.preventDefault();
        return false;
    }
    
    // Prevent Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) {
        e.preventDefault();
        return false;
    }
    
    // Prevent Ctrl+U (View Source)
    if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
        e.preventDefault();
        return false;
    }
});

// Disable text selection
document.addEventListener('selectstart', (e) => {
    e.preventDefault();
    return false;
});

// Disable copy
document.addEventListener('copy', (e) => {
    e.preventDefault();
    return false;
});

// Disable cut
document.addEventListener('cut', (e) => {
    e.preventDefault();
    return false;
});

// Disable paste
document.addEventListener('paste', (e) => {
    e.preventDefault();
    return false;
});

// Detect DevTools
let devtools = function() {};
devtools.toString = function() {
    if (!this.opened) {
        document.body.innerHTML = '';
        window.location.reload();
    }
    this.opened = true;
}

// Check for DevTools
setInterval(() => {
    console.log(devtools);
    console.clear();
}, 1000);

// Additional DevTools detection
(function() {
    'use strict';
    const devtools = {
        isOpen: false,
        orientation: undefined
    };

    const threshold = 160;
    const emitEvent = (isOpen, orientation) => {
        if (devtools.isOpen !== isOpen || devtools.orientation !== orientation) {
            devtools.isOpen = isOpen;
            devtools.orientation = orientation;
            if (isOpen) {
                document.body.innerHTML = '';
                window.location.reload();
            }
        }
    };

    setInterval(() => {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        const orientation = widthThreshold ? 'vertical' : 'horizontal';

        if (heightThreshold && widthThreshold) {
            emitEvent(true, undefined);
        } else if (widthThreshold) {
            emitEvent(true, orientation);
        } else {
            emitEvent(false, undefined);
        }
    }, 500);
})();

// Clear console
console.clear = function() {
    console.log = function() {};
    console.clear = function() {};
};

// Disable debugging
eval = function() {
    throw new Error("Sorry, this isn't allowed");
};