/**
 * @description Creates new game
 * @since 0.4.0
 */
class Game {
    game_name;
    game_version;
    parent_element;
    style;
    width;
    height;
    useOwnCanvas;
    canvas;
    ClearScreen;
    deltaTime;
    oldTimeStamp;
    fps;
    fps_on = false;
    game_type;
    constructor(config) {
        this.game_name = config.game_name != null ? config.game_name : null;
        this.game_version = config.game_version != null ? config.game_version : null;
        this.style = config.style;
        this.width = config.width;
        this.height = config.height;
        this.useOwnCanvas = config.useOwnCanvas;
        document.title = this.game_name != null ? this.game_name : document.title;
        document.title += this.game_version != null ? (" - v" + this.game_version) : "";
        /*
        if (config.game_type == "canvas" || config.game_type == "dom") {
            this.game_type = config.game_type;
        } else {
            Logging.error(`${this.game_type} is not a valid game_type`)
            Logging.warn("Setting game_type to \"canvas\"");
            this.game_type = "canvas"
        }
        */
        if (this.useOwnCanvas) {
            this.parent_element = config.canvas.parentElement;
            this.canvas = config.canvas;
            this.canvas.style = "background-color: black;" + this.style;
            this.canvas.width = this.width;
            this.canvas.height = this.height;
        }
        else {
            this.parent_element = config.parent_element;
            this.canvas = document.createElement('canvas');
            this.canvas.style = ("background-color: black;" + this.style);
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            document.querySelector(this.parent_element).append(this.canvas);
        }
        let powered_by_playlib = document.createElement("span");
        powered_by_playlib.style.fontFamily = 'arial';
        powered_by_playlib.style.fontSize = "16px";
        powered_by_playlib.innerText = "PlayLib";
        let powered_holder = document.createElement("p");
        powered_holder.style.fontFamily = 'arial';
        powered_holder.style.fontSize = "13px";
        powered_holder.innerHTML = "Powered by ";
        powered_holder.appendChild(powered_by_playlib);
        document.body.appendChild(powered_holder);
    }
    create(func, ClearScreen = true) {
        ClearScreen = typeof ClearScreen == 'boolean' ? ClearScreen : true;
        var context = this.canvas.getContext('2d');
        if (ClearScreen)
            context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        func(context);
    }
    update(func, ClearScreen = true) {
        ClearScreen = typeof ClearScreen == 'boolean' ? ClearScreen : true;
        var context = this.canvas.getContext('2d');
        const gameLoop = (timeStamp) => {
            // Calculate the number of seconds passed since the last frame
            this.deltaTime = (timeStamp - this.oldTimeStamp) / 1000;
            this.oldTimeStamp = timeStamp;
            // Calculate fps
            this.fps = Math.round(1 / this.deltaTime);
            if (ClearScreen)
                context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            func(context);
            // Draw number to the screen
            if (this.fps_on) {
                context.fillStyle = 'white';
                context.fillRect(0, 0, 125, 42.5);
                context.font = '22px Arial';
                context.fillStyle = 'black';
                context.fillText("FPS: " + this.fps, 10, 30);
            }
            // The loop function has reached it's end. Keep requesting new frames
            window.requestAnimationFrame(gameLoop);
        };
        window.requestAnimationFrame(gameLoop);
    }
    clear() {
        var context = this.canvas.getContext('2d');
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    showFPS(is_on) {
        this.fps_on = is_on;
    }
}
export { Game };
