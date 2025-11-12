let baseImg; //holds the bg image
let animations = []; //empty array to hold multiple animation objects
let hitboxes = []; //array to store hit zones for mouse. 
pearls = []; //array to store pearl objects 

// Each pearl: { x, y, w, h, collected, falling, speedY }

let avatarAnimation = [];
let avatarX;
let avatarY;
let avatarSize = 30;
let avatarSpeed = 3;

let nextProjectLink;
let hoveringButton1 = false;
let hoveringButton2 = false;
let gameActive = true;

let pearlCollectSound;
let menuSelectSound;
let menuHoverSound;
let bgMusic;
let dragonSounds;
let winSound;
let coinActiveSound;

let topCoverImg;
let bronzeCoverImg;
let blueCoverImg;
let starCoverImg;
let bronzeCoverVisible = true;
let topCoverVisible = true;
let blueCoverVisible = true;
let starCoverVisible = true;

function preload() {

    //The following arrays set up animation sequences based on exported images
    let anim1 = [loadImage('images/top/topDrag-0000.png'), loadImage('images/top/topDrag-0001.png'), loadImage('images/top/topDrag-0002.png'), loadImage('images/top/topDrag-0003.png'), loadImage('images/top/topDrag-0004.png'), loadImage('images/top/topDrag-0005.png'), loadImage('images/top/topDrag-0006.png'), loadImage('images/top/topDrag-0007.png'), loadImage('images/top/topDrag-0008.png'), loadImage('images/top/topDrag-0009.png'), loadImage('images/top/topDrag-0010.png'), loadImage('images/top/topDrag-0011.png'), loadImage('images/top/topDrag-0012.png'), loadImage('images/top/topDrag-0013.png'), loadImage('images/top/topDrag-0014.png'), loadImage('images/top/topDrag-0015.png'), loadImage('images/top/topDrag-0016.png'), loadImage('images/top/topDrag-0017.png'), loadImage('images/top/topDrag-0018.png'), loadImage('images/top/topDrag-0019.png'), loadImage('images/top/topDrag-0020.png'), loadImage('images/top/topDrag-0021.png'), loadImage('images/top/topDrag-0022.png'), loadImage('images/top/topDrag-0023.png'), loadImage('images/top/topDrag-0024.png'), loadImage('images/top/topDrag-0025.png')];

    let anim2 = [loadImage('images/blue/blueDrag-0000.png'), loadImage('images/blue/blueDrag-0001.png'), loadImage('images/blue/blueDrag-0002.png'), loadImage('images/blue/blueDrag-0003.png'), loadImage('images/blue/blueDrag-0003.png'), loadImage('images/blue/blueDrag-0004.png'), loadImage('images/blue/blueDrag-0005.png'), loadImage('images/blue/blueDrag-0006.png'), loadImage('images/blue/blueDrag-0007.png'), loadImage('images/blue/blueDrag-0008.png'), loadImage('images/blue/blueDrag-0009.png'), loadImage('images/blue/blueDrag-0010.png'), loadImage('images/blue/blueDrag-0011.png'), loadImage('images/blue/blueDrag-0012.png'), loadImage('images/blue/blueDrag-0013.png'), loadImage('images/blue/blueDrag-0014.png'), loadImage('images/blue/blueDrag-0015.png'), loadImage('images/blue/blueDrag-0016.png'), loadImage('images/blue/blueDrag-0017.png'), loadImage('images/blue/blueDrag-0018.png'), loadImage('images/blue/blueDrag-0019.png'), loadImage('images/blue/blueDrag-0020.png'), loadImage('images/blue/blueDrag-0021.png'), loadImage('images/blue/blueDrag-0022.png'), loadImage('images/blue/blueDrag-0023.png'), loadImage('images/blue/blueDrag-0024.png'), loadImage('images/blue/blueDrag-0025.png')];

    let anim3 = [loadImage('images/bronze/bronzeDrag-0000.png'), loadImage('images/bronze/bronzeDrag-0001.png'), loadImage('images/bronze/bronzeDrag-0002.png'), loadImage('images/bronze/bronzeDrag-0003.png'), loadImage('images/bronze/bronzeDrag-0004.png'), loadImage('images/bronze/bronzeDrag-0005.png'), loadImage('images/bronze/bronzeDrag-0006.png'), loadImage('images/bronze/bronzeDrag-0007.png'), loadImage('images/bronze/bronzeDrag-0008.png'), loadImage('images/bronze/bronzeDrag-0009.png'), loadImage('images/bronze/bronzeDrag-0010.png'), loadImage('images/bronze/bronzeDrag-0011.png'), loadImage('images/bronze/bronzeDrag-0012.png'), loadImage('images/bronze/bronzeDrag-0013.png'), loadImage('images/bronze/bronzeDrag-0014.png'), loadImage('images/bronze/bronzeDrag-0015.png'), loadImage('images/bronze/bronzeDrag-0016.png'), loadImage('images/bronze/bronzeDrag-0017.png'), loadImage('images/bronze/bronzeDrag-0018.png'), loadImage('images/bronze/bronzeDrag-0019.png'), loadImage('images/bronze/bronzeDrag-0020.png'), loadImage('images/bronze/bronzeDrag-0021.png'), loadImage('images/bronze/bronzeDrag-0022.png'), loadImage('images/bronze/bronzeDrag-0023.png'), loadImage('images/bronze/bronzeDrag-0024.png'), loadImage('images/bronze/bronzeDrag-0025.png')];

    let anim4 = [loadImage('images/star/starDrag-0000.png'), loadImage('images/star/starDrag-0001.png'), loadImage('images/star/starDrag-0002.png'), loadImage('images/star/starDrag-0003.png'), loadImage('images/star/starDrag-0004.png'), loadImage('images/star/starDrag-0005.png'), loadImage('images/star/starDrag-0006.png'), loadImage('images/star/starDrag-0007.png'), loadImage('images/star/starDrag-0008.png'), loadImage('images/star/starDrag-0009.png'), loadImage('images/star/starDrag-0010.png'), loadImage('images/star/starDrag-0011.png'), loadImage('images/star/starDrag-0012.png'), loadImage('images/star/starDrag-0013.png'), loadImage('images/star/starDrag-0014.png'), loadImage('images/star/starDrag-0015.png'), loadImage('images/star/starDrag-0016.png'), loadImage('images/star/starDrag-0017.png'), loadImage('images/star/starDrag-0018.png'), loadImage('images/star/starDrag-0019.png'), loadImage('images/star/starDrag-0020.png'), loadImage('images/star/starDrag-0021.png'), loadImage('images/star/starDrag-0022.png'), loadImage('images/star/starDrag-0023.png'), loadImage('images/star/starDrag-0024.png'), loadImage('images/star/starDrag-0025.png')];

    let aviAnim = [loadImage('images/Avatar-0000.png'), loadImage('images/Avatar-0001.png'), loadImage('images/Avatar-0002.png')];

    //the following array creates animation objects that draw frames from the anim arrays declared previously. Starts at item 0, sets animation play to off, frameTimer tracks time for frame switching and stars at 0. 

    //FRAMEDELAY how long (in milliseconds) to wait before showing the next frame 42 = 24 fps

    animations = [
        { frames: anim1, frameIndex: 0, animating: false, frameTimer: 0, frameDelay: 42, hasPlayedSound: false },
        { frames: anim2, frameIndex: 0, animating: false, frameTimer: 0, frameDelay: 42, hasPlayedSound: false },
        { frames: anim3, frameIndex: 0, animating: false, frameTimer: 0, frameDelay: 42, hasPlayedSound: false },
        { frames: anim4, frameIndex: 0, animating: false, frameTimer: 0, frameDelay: 42, hasPlayedSound: false }
    ];

    aviAnimObject = [
        { frames: aviAnim, frameIndex: 0, animating: true, frameTimer: 0, frameDelay: 120 }
    ]

    baseImg = loadImage('images/DragonBasecover.jpg');//loads background
    topCoverImg = loadImage('images/bases/topBase.png');
    bronzeCoverImg = loadImage('images/bases/bronzeBase.png');
    blueCoverImg = loadImage('images/bases/blueBase.png');
    starCoverImg = loadImage('images/bases/starBase.png');

    let pearls = [
        { x: 30, y: 30, w: 10, h: 10, fill: color(255, 187, 88), collected: false, visible: false, falling: false, speedY: 2, sparkles: [], hasPlayedSound: false },
        { x: 260, y: 30, w: 10, h: 10, fill: color(255, 187, 88), collected: false, visible: false, falling: false, speedY: 2, sparkles: [], hasPlayedSound: false },
        { x: 175, y: 450, w: 10, h: 10, fill: color(255, 187, 88), collected: false, visible: false, falling: false, speedY: 2, sparkles: [], hasPlayedSound: false },
        { x: 315, y: 330, w: 10, h: 10, fill: color(255, 187, 88), collected: false, visible: false, falling: false, speedY: 2, sparkles: [], hasPlayedSound: false }
    ];

    fontQuicksand = loadFont('font/Quicksand-VariableFont_wght.ttf');

    bgMusic = loadSound('sounds/BGMusic.mp3');
}


function setup() {
    console.log(bronzeCoverImg);
    pearlCollectSound = loadSound('sounds/coinCollect.wav');
    menuSelectSound = loadSound('sounds/menuSelect.wav');
    menuHoverSound = loadSound('sounds/menuHover.wav');
    dragonSounds = [loadSound('sounds/growl1.wav'), loadSound('sounds/growl2.wav'), loadSound('sounds/growl3.wav'), loadSound('sounds/growl4.wav'), loadSound('sounds/growl5.wav')]
    winSound = loadSound('sounds/winSound.wav');
    coinActiveSound = loadSound('sounds/coinActive.mp3');
    // Play background music
    if (bgMusic.isLoaded()) {
        bgMusic.setVolume(0.1); // adjust the volume (0.0 - 1.0)
        bgMusic.loop();          // loops continuously
    }

    createCanvas(450, 600);

    //creates an array of interaction hitboxes
    hitboxes = [
        { x: 30, y: 30, w: 140, h: 120 },
        { x: 260, y: 30, w: 110, h: 100 },
        { x: 175, y: 450, w: 130, h: 120 },
        { x: 315, y: 330, w: 105, h: 90 }
    ];

    avatarX = width / 2;
    avatarY = height / 2;

    nextProjectLink = createA('https://p5js.org/', 'Go to the Next Project.', '_blank');
    nextProjectLink.position(150, height / 2 + 51);
    nextProjectLink.hide();
    nextProjectLink.style('color', 'rgb(255, 216, 165)');
    nextProjectLink.style('font-family', 'Quicksand, sans-serif');
    nextProjectLink.style('font-size', '15px');
    nextProjectLink.style('text-decoration', 'none');
    nextProjectLink.style('font-weight', 'normal');
    nextProjectLink.style('background', 'none');
    nextProjectLink.style('border', 'none');
    nextProjectLink.style('cursor', 'pointer');
}

function draw() {
    background(baseImg);

    if (bronzeCoverVisible) {
        image(bronzeCoverImg, 0, 0);
    }

    if (topCoverVisible) {
        image(topCoverImg, 0, 0);
    }

    if (blueCoverImg) {
        image(blueCoverImg, 0, 0);
    }

    if (starCoverVisible) {
        image(starCoverImg, 0, 0);
    }

    animationHitBoxes();
    handleAvatarMovement();
    drawAvatar();
    updatePearls();
    drawPearls();
    // Show the "Next Project" link when active
    if (showNextProjectLink.active) {
        showNextProjectLink();
    }
}

function handleAvatarMovement() {

    if (keyIsPressed) {
        if (keyIsDown(LEFT_ARROW)) {
            avatarX -= avatarSpeed;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            avatarX += avatarSpeed;
        }
        if (keyIsDown(UP_ARROW)) {
            avatarY -= avatarSpeed;
        }
        if (keyIsDown(DOWN_ARROW)) {
            avatarY += avatarSpeed;
        }
    }
}

function animationHitBoxes() {
    for (let i = 0; i < hitboxes.length; i++) {//for each hitbox in the array hitboxes
        let hitBox = hitboxes[i];//let hitbox mean the current hitbox in the array
        let anims = animations[i]; //let anims mean the current animation in the aray

        let isInside = isAvatarInside(hitBox);//if anims are playing check if the avatar is inside the hitbox
        anims.animating = isInside;

        if (i === 0) {
            topCoverVisible = !isInside;
        }
        if (i === 1) {
            blueCoverVisible = !isInside;
        }
        if (i === 2) {
            bronzeCoverVisible = !isInside;
        }

        if (i === 3) {
            starCoverVisible = !isInside;
        }

        if (anims.animating && !anims.hasDroppedPearl) { //if the animations are playing and the anims.hasDroppedPearl is false (base is false)
            dropPearl(hitBox); //then drop the pearl
            anims.hasDroppedPearl = true; //and change anims.haDroppedPearl to true
        }

        if (isInside && !anims.hasPlayedSound) {
            let randomIndex = floor(random(dragonSounds.length));
            let dragonSound = dragonSounds[randomIndex];
            if (dragonSound.isLoaded()) {
                dragonSound.play();
            }
            anims.hasPlayedSound = true;
        }

        // Reset hasPlayedSound if avatar leaves the hitbox
        if (!isInside) {
            anims.hasPlayedSound = false;
        }

        updateDragonAnims(anims);//run dragon animation timing logic for the anims array
        drawDragonAnims(anims); //draw the frames for the anims array
        //drawHitBox(hitBox); //draw the hitbox for debugging
    }
}

function isAvatarInside(hitBox) {//for the hitbox array
    return (//send this info into hitbox array
        avatarX > hitBox.x && //if avatar x is greater than hitbox x location
        avatarX < hitBox.x + hitBox.w && //if avatar x is less than the hitbox x location plus the hitbox's width
        avatarY > hitBox.y && //if avatar y is greater than the hitbox y location
        avatarY < hitBox.y + hitBox.h //if avatar y is less than hitbox y location plus the hitbox height
    );
}

function updateDragonAnims(anims) { //for the dragon animations array
    if (!anims.animating) return; //if the animatons animating is true

    const timeSinceLastFrame = millis() - anims.frameTimer; //set the timeSinceLastFrame to millis minus the framtimer property in the anims array

    if (timeSinceLastFrame > anims.frameDelay) { //if the time since last frame is greater than the frame delay property

        anims.frameIndex = anims.frameIndex + 1; //then move to the next frame in the array

        if (anims.frameIndex >= anims.frames.length) { //and it the frames are greater than or equal to the array length
            anims.frameIndex = 0; //set the fram back to 0 to look the animation
        }

        anims.frameTimer = millis(); //if the frames are back at 0, reset the timer too
    }
}

function drawDragonAnims(anims) { //function for the animation array
    if (anims.animating) { //if the dragons are animating
        image(anims.frames[anims.frameIndex], 0, 0); //draw the image and set the image to the current frame number in the array. The coordinates are 0,0
    }
}

function drawHitBox(hitBox) { //makes the hitboxes visible for debugging
    noFill();
    stroke(255, 0, 0);
    rect(hitBox.x, hitBox.y, hitBox.w, hitBox.h);
}

function drawAvatar() { //for the avatar creation
    let avi = aviAnimObject[0]; //set the avatar's frame array to 0
    handleAvatarAnimation(avi); //attache the keypress function to the avi

    let currentFrame = avi.frames[avi.frameIndex]; //for the avi array frame property, set the current frame as the current image
    imageMode(CENTER); // Centers the image on (avatarX, avatarY)
    image(currentFrame, avatarX, avatarY, avatarSize * 3, avatarSize * 3); //draw the image as the current frame at the center of the screen, then multiply the avatars width and height by 3 
    imageMode(CORNER); //resets image settings so it doesn't affect future images
}

function handleAvatarAnimation(avi) { //timing and animation for the avatar

    let timeSinceLastFrame = millis() - avi.frameTimer; //set the frame timing as millis minus the avis frame timer property
    if (timeSinceLastFrame > avi.frameDelay) { //if the frame timer is greater than the avi frame delay setting
        avi.frameIndex = (avi.frameIndex + 1) % avi.frames.length; //then move the frame indes forward by one for the full length of the frames array
        avi.frameTimer = millis(); //reset the frame timer at 0 for looping
    }
}

function dropPearl(hitBox) { //for the hitbox array
    // Create the new pearl object
    pearls.push({
        x: hitBox.x + hitBox.w / 2,
        y: hitBox.y + hitBox.h / 2,
        w: 10,
        h: 10,
        fill: color(255, 187, 88),
        collected: false,
        falling: true,
        visible: true,
        speedY: 2,
        sparkles: [],
        hasPlayedSound: false
    });

}

function drawPearls() { //pearl designs 
    noStroke();

    for (let pearl of pearls) { //for each pearl in the pearl array
        if (pearl.visible && !pearl.collected) { //if the pearl.collected property is true
            fill(pearl.fill);
            ellipse(pearl.x, pearl.y, pearl.w, pearl.h); //draw an ellipse at the moving pearl location
            updatePearlSparkles(pearl);//make sparkles animate around the pearl

            for (let spark of pearl.sparkles) { //for each sparkle in the sparkle array
                fill(255, 255, 200, spark.alpha); //color of sparkles
                ellipse(spark.x, spark.y, spark.size); //shape and size of sparkles
            }
        }
    }
}

function isAvatarNearPearl(pearl) {//for each pearl in the pearl array
    let d = dist(avatarX, avatarY, pearl.x, pearl.y); //detect the distance as the avatars position and the moving location of the pearl
    return d < (avatarSize / 2 + pearl.w / 2); //return to the pearl array if the avatar's location overlaps the pearl's location
}

function updatePearls() { //sets the falling pearl animation
    for (let pearl of pearls) { //for each pearl in the pearl array
        if (pearl.falling) { //if the pearl property falling is true
            if (!pearl.hasPlayedSound && coinActiveSound.isLoaded()) {
                coinActiveSound.play();
                coinActiveSound.setVolume(0.1); // adjust the volume (0.0 - 1.0)
                pearl.hasPlayedSound = true;
            }
            pearl.y += pearl.speedY; //increase the pearl y position by the speed y number
            if (pearl.y > height - 15) { //if the pearl y position is greater than the height of the canvas minus 10
                pearl.falling = false; //turn off the pearl falling
            }
        }
    }
    pearlCollection(); //run the pearl collection function
}

function updatePearlSparkles(pearl) { //for the pearl array

    if (random() < 0.2) { // 20% chance per frame
        pearl.sparkles.push({//push this info to the empty sparkles array
            x: pearl.x + random(-pearl.w / 2, pearl.w / 2),//the x property is the x location plus a random width and height of pearl divided by 2
            y: pearl.y + random(-pearl.h / 2, pearl.h / 2), //the y property is the y location plus a random width and height of pearl divided by 2
            size: random(1, 3), //set the size as random between 1 and 3
            alpha: 255 //set sparkle color to white
        });
    }

    for (let i = pearl.sparkles.length - 1; i >= 0; i--) {//for each pearl iteration in the random sparckles array length minus 1, if the sparckle exists, subtract the sparcles
        let spark = pearl.sparkles[i]; //set spark as current array item
        spark.alpha -= 5; // fade the sparkle by 5
        if (spark.alpha <= 0) { //is the sparkle is transparent
            pearl.sparkles.splice(i, 1); //remove the current array iteration by one
        }
    }
}

function pearlCollection() {
    for (let pearl of pearls) {//for each pearl in the pearl array
        if (!pearl.collected && isAvatarNearPearl(pearl)) { //if the pearl collect is false and the avatar overlaps the pearl in the array
            pearl.collected = true; //change the pearl collected to true
            // Play the sound when the pearl is collected
            if (pearlCollectSound.isLoaded()) { // make sure the sound is loaded
                pearlCollectSound.play();
            }
        }

        let collectedCount = 0; //set a 0 variable

        for (let i = 0; i < pearls.length; i++) { //for each pearl in the pearl array
            if (pearls[i].collected) { //if the current pearl is collected (true)
                collectedCount += 1; //increase the collected count by 1
            }
        }

        if (collectedCount === 4 && !showNextProjectLink.active) {
            showNextProjectLink.active = true;
            gameActive = false;

            if (winSound.isLoaded()) {
                winSound.setVolume(1);
                winSound.play();
            }

        }
    }
}

function showNextProjectLink() {

    // If sparkles array hasn't been made yet, create it
    if (!showNextProjectLink.sparkles) {
        showNextProjectLink.sparkles = [];
    }

    // Make sure it's active (turn this ON when all pearls are collected)
    showNextProjectLink.active = true;
    gameActive = false;

    fill(55, 72, 84);
    stroke(255, 216, 165);
    strokeWeight(2);
    rect(12, height / 2 - 32, 425, 50, 10);
    fill(255, 216, 165);
    noStroke();
    textFont(fontQuicksand);
    textSize(24);
    textAlign(CENTER);
    text("All pearls collected!", width / 2, height / 2);

    linkButton1();
    linkButton2();

    //SPARKLES FOR TEXT BOX
    let sparkles = showNextProjectLink.sparkles;
    // add new sparkles occasionally
    if (frameCount % 10 === 0) {  // slower rate
        let x = random(12, 12 + 425);
        let y = height / 2 + 18;
        sparkles.push({
            x: x,
            y: y,
            size: random(2, 5),
            alpha: 255,
            speedY: random(0.3, 0.8),
            driftX: random(-0.3, 0.3)
        });
    }

    // update and draw sparkles
    for (let i = sparkles.length - 1; i >= 0; i--) {
        let s = sparkles[i];
        fill(255, 216, 165, s.alpha);
        noStroke();
        ellipse(s.x, s.y, s.size);

        s.x += s.driftX;
        s.y += s.speedY; // move upward
        s.alpha -= 1.5;
        if (s.alpha <= 0) sparkles.splice(i, 1);
    }
}


function linkButton1() {
    if (!showNextProjectLink.active) return; // exit if not active
    // define button dimensions
    let btnX = width / 2 - 90;
    let btnY = height / 2 + 42;
    let btnW = 185;
    let btnH = 40;

    // check if the mouse is inside the button
    let isHovering = mouseX > btnX && mouseX < btnX + btnW &&
        mouseY > btnY && mouseY < btnY + btnH;

    // change color based on hover
    if (isHovering) {
        fill(83, 104, 120);
        cursor(HAND);

        // play sound only when first hovering
        if (!hoveringButton1 && menuHoverSound.isLoaded()) {
            menuHoverSound.play();
        }
        hoveringButton1 = true;
    } else {
        fill(55, 72, 84);
        cursor(ARROW);
        hoveringButton1 = false; // reset when mouse leaves
    }

    stroke(255, 216, 165);
    strokeWeight(2);
    rect(btnX, btnY, btnW, btnH, 10);

    // show the link text (assuming your link sits on top)
    nextProjectLink.show();
}

function linkButton2() {
    if (!showNextProjectLink.active) return; // exit if not active
    // define button dimensions
    let btnX = width / 2 - 90;
    let btnY = height / 2 + 90;
    let btnW = 185;
    let btnH = 40;

    // check if the mouse is inside the button
    let isHovering = mouseX > btnX && mouseX < btnX + btnW &&
        mouseY > btnY && mouseY < btnY + btnH;

    if (isHovering) {
        fill(83, 104, 120);
        cursor(HAND);

        // play sound only when first hovering
        if (!hoveringButton2 && menuHoverSound.isLoaded()) {
            menuHoverSound.play();
        }
        hoveringButton2 = true;
    } else {
        fill(55, 72, 84);
        cursor(ARROW);
        hoveringButton2 = false; // reset when mouse leaves
    }

    stroke(255, 216, 165);
    strokeWeight(2);
    rect(btnX, btnY, btnW, btnH, 10);
    fill(255, 216, 165);
    noStroke();
    textFont(fontQuicksand);
    textSize(20);
    textAlign(CENTER);
    text("Restart.", 230, 416);

}

function resetGame() {
    // Reset pearls to the center of their respective hitboxes
    pearls = hitboxes.map(hb => ({
        x: hb.x + hb.w / 2,
        y: hb.y + hb.h / 2,
        w: 10,
        h: 10,
        fill: color(255, 187, 88),
        collected: false,
        falling: false,
        visible: false,
        speedY: 2,
        sparkles: []
    }));

    // Reset animation states
    for (let anim of animations) {
        anim.animating = false;
        anim.hasDroppedPearl = false;
        anim.frameIndex = 0;
    }

    // Reset avatar position
    avatarX = width / 2;
    avatarY = height / 2;
    //reset collected pearls
    pearls = [];

    // Hide buttons again

    if (showNextProjectLink.resetButton) {
        showNextProjectLink.resetButton.hide();
    }

    // Clear sparkles
    showNextProjectLink.sparkles = [];
    showNextProjectLink.active = false;
    nextProjectLink.hide();
    gameActive = true;
    // reset hover states and cursor
    hoveringButton1 = false;
    hoveringButton2 = false;
    cursor(ARROW);
}

function mousePressed() {

    if (showNextProjectLink.active) {
        // Button 1 dimensions
        let btn1X = width / 2 - 90;
        let btn1Y = height / 2 + 42;
        let btnW = 185;
        let btnH = 40;

        // Button 2 dimensions
        let btn2X = width / 2 - 90;
        let btn2Y = height / 2 + 90;

        // Check if the mouse click is inside each button
        let clickedButton1 = mouseX > btn1X && mouseX < btn1X + btnW &&
            mouseY > btn1Y && mouseY < btn1Y + btnH;
        let clickedButton2 = mouseX > btn2X && mouseX < btn2X + btnW &&
            mouseY > btn2Y && mouseY < btn2Y + btnH;


        if (clickedButton1) {
            if (menuSelectSound.isLoaded()) { // make sure the sound is loaded
                menuSelectSound.play();
            }
        }

        if (clickedButton2) {
            if (menuSelectSound.isLoaded()) { // make sure the sound is loaded
                menuSelectSound.play();
            }
            resetGame();
        }
    }
}
