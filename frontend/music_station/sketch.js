let volumeSlider;
let frequencyRotary;
let oscillator;
let amp;
let beatInterval;
let lastBeatTime;

function setup() {
  createCanvas(400, 400);

  // 初始化Web Audio API
  amp = new p5.Amplitude();

  // 创建音量滑块
  volumeSlider = createSlider(0, 1, 0.5, 0.01);
  volumeSlider.position(20, 20);

  // 创建频率旋钮（用于控制节拍速度）
  frequencyRotary = createSlider(1, 10, 5, 0.1);
  frequencyRotary.position(20, 60);

  beatInterval = 1000 / frequencyRotary.value();
  lastBeatTime = millis();
}

function draw() {
  background(220);

  // 用RGBRing显示音量
  let vol = amp.getLevel();
  let col = map(vol, 0, 1, 0, 255);
  fill(col, 255 - col, 150);
  ellipse(width / 2, height / 2, 100, 100);

  fill(0);
  text("Volume", 20, 15);
  text("Beat Speed", 20, 55);

  // 检测时间，根据滑块的值播放节拍
  if (millis() - lastBeatTime > beatInterval) {
    playBeat();
    lastBeatTime = millis();
    beatInterval = 1000 / frequencyRotary.value();
  }
}

// 播放一个节拍
function playBeat() {
  oscillator = new p5.Oscillator('sine');
  oscillator.freq(random(200, 800));
  oscillator.amp(volumeSlider.value());
  oscillator.start();
  oscillator.stop(0.1);  // 停止音频，产生节拍效果
}

// 使用Ultrasonic（这里用鼠标模拟）弹奏
function mousePressed() {
  playBeat();
}
