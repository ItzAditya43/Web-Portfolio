/**
 * Chromatic cursor effect for portfolio
 * A cursor with trailing multi-colored dots that reacts
 * to hover events and adjusts colors based on the section
 */

function lerp(v0, v1, t) {
    return v0 * (1 - t) + v1 * t;
  }
  
  const TWO_PI = Math.PI * 2;
  let isHovering = false;
  let scale = 1;
  let currentScale = 1;
  let s = 0;
  
  const pos = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  };
  
  // Initialize cursor on document load
  document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector(".cursor");
    
    if (!cursor) {
      console.error("Cursor element not found");
      return;
    }
    
    // Add directly to the document body to ensure it's on top
    if (cursor.parentElement !== document.body) {
      document.body.appendChild(cursor);
    }
    
    // Add a class to the body to ensure cursor mode is on
    document.body.classList.add('custom-cursor-active');
    
    // Make all links and interaction elements hoverable
    const allLinks = document.querySelectorAll('a, button');
    allLinks.forEach(link => {
      link.classList.add('hoverable');
    });
    
    const hoverable = Array.from(document.querySelectorAll(".hoverable"));
    hoverable.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });
    
    const cursors = Array.from(document.querySelectorAll(".cursor span")).map(
      (el) => ({
        el,
        x: pos.x,
        y: pos.y
      })
    );
    
    // Force cursor spans to have higher z-index
    cursors.forEach(c => {
      c.el.style.zIndex = '99999';
    });
    
    // Add mouse move event listener to the body
    document.addEventListener("mousemove", function(e) {
      onMouseMove(e, cursors);
    });
    
    // Start animation loop
    requestAnimationFrame(() => tick(cursors));
    
    // Initial cursor position (center of screen)
    document.dispatchEvent(new MouseEvent('mousemove', {
      clientX: window.innerWidth/2,
      clientY: window.innerHeight/2
    }));
  });
  
  function onMouseMove(e, cursors) {
    pos.x = e.pageX;
    pos.y = e.pageY;
    
    // Check if cursor is over left or right section and update color
    updateCursorColor(e, cursors);
  }
  
  function updateCursorColor(e, cursors) {
    if (!cursors || cursors.length === 0) return;
    
    // Get the element under the cursor
    const elementsUnderCursor = document.elementsFromPoint(e.clientX, e.clientY);
    
    // Check if the cursor is over the left or right section
    const isOverLeftSection = elementsUnderCursor.some(el => el.classList.contains('left-section'));
    const isOverRightSection = elementsUnderCursor.some(el => el.classList.contains('right-section'));
    
    // Change cursor color based on section
    if (isOverLeftSection) {
      cursors.forEach(c => {
        c.el.style.backgroundColor = '#ffffff';
        c.el.style.opacity = '0.9';
        // Remove any mix-blend-mode
        c.el.style.mixBlendMode = 'difference';
      });
    } else if (isOverRightSection) {
      cursors.forEach(c => {
        c.el.style.backgroundColor = '#000000';
        c.el.style.opacity = '0.9';
        // Remove any mix-blend-mode
        c.el.style.mixBlendMode = 'difference';
      });
    } else {
      // Default vibrant colors - no blend mode
      cursors[0].el.style.backgroundColor = 'rgba(0, 0, 255, 0.8)';
      cursors[1].el.style.backgroundColor = 'rgba(0, 255, 0, 0.8)';
      cursors[2].el.style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
      cursors.forEach(c => {
        c.el.style.mixBlendMode = 'normal';
      });
    }
  }
  
  function onMouseEnter() {
    isHovering = true;
    scale = 1.3;
    const cursor = document.querySelector(".cursor");
    if (cursor) cursor.classList.add("is-hovering");
  }
  
  function onMouseLeave() {
    isHovering = false;
    scale = 1;
    const cursor = document.querySelector(".cursor");
    if (cursor) cursor.classList.remove("is-hovering");
  }
  
  function tick(cursors) {
    if (!cursors || cursors.length === 0) {
      requestAnimationFrame(() => tick(cursors));
      return;
    }
    
    s++;
    let t = 0;
    
    for (let i = 0; i < cursors.length; i++) {
      const c = cursors[i];
      const prev = cursors[i - 1] || pos;
      
      c.x = lerp(c.x, prev.x, 0.3 + t);
      c.y = lerp(c.y, prev.y, 0.3 + t);
      t = 0.6 - i / 20;
      
      let x = c.x;
      let y = c.y;
      
      if (isHovering) {
        x += Math.cos((s + i * 2 + (i % 2 === 0 ? 2 : -2)) * 0.015 * TWO_PI) * 2;
        y += Math.sin((s + i * 2 + (i % 2 === 0 ? -2 : 2)) * 0.015 * TWO_PI) * 2;
      }
      
      currentScale = lerp(currentScale, scale, 0.06);
      
      // Ensure the cursor is positioned correctly
      try {
        c.el.style.transform = `translate(${x - 15}px, ${y - 15}px) scale(${currentScale})`;
        
        // Make sure cursor is visible by forcing a style update
        c.el.style.display = 'block';
        
        // Force browser to update render - helps with visibility issues
        void c.el.offsetWidth;
      } catch (e) {
        console.error("Error updating cursor position:", e);
      }
    }
    
    requestAnimationFrame(() => tick(cursors));
  }