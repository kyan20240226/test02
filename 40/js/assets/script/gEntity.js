window.gLocalAssetContainer["gEntity"] = function(g) { (function(exports, require, module, __filename, __dirname) {
// ＝＝＝＝個別＝＝＝＝

// タイトル画面の案内メッセージ
module.exports.tLabel_guide_msg = function(scene, gConst, font, x, y, size, text) {
  return new g.Label({
    scene: scene,
    font: font,
    fontSize: size,
    text: ""+text,
    //textColor: "white",
    x: x,
    y: y,
  });
};

// ライト表現
module.exports.gRect_light = function(scene, gConst) {
  return new g.FilledRect({
    scene: scene,
    cssColor: "yellow",
    width: g.game.width,
    height: g.game.height,
    opacity: 0,
  });
};

// ブロック用の画像
module.exports.gSprite_block = function(scene, gConst, n, x, y) {
  return new g.Sprite({
    scene: scene,
    src: scene.asset.getImageById("block"),
    width: gConst.block.width,
    height: gConst.block.height,
    srcX: gConst.block.src.x,
    srcY: gConst.block.src.y+n*gConst.block.src.cyc,
    x: x,
    y: y,
    scaleX: gConst.block.scale,
    scaleY: gConst.block.scale,
    anchorX: 0.5,
    anchorY: gConst.layout.anchorY,
    // opacity: 0.8,
    hidden: true,
  });
};
// オブジェクト用の画像
module.exports.gSprite_object = function(scene, gConst) {
  return new g.Sprite({
    scene: scene,
    src: scene.asset.getImageById("object"),
    width: gConst.object.width,
    height: gConst.object.height,
    srcX: gConst.object.src.x,
    srcY: gConst.object.src.y,
    scaleX: gConst.object.scale,
    scaleY: gConst.object.scale,
    anchorX: 0.5,
    anchorY: gConst.layout.anchorY,
    hidden: true,
  });
};

// ★★デバッグ用★★ ブロックごとのラベル
module.exports.gLabel_block = function(scene, gConst, font, col, raw) {
  return new g.Label({
    scene: scene,
    text: col+"-"+raw, // サンプル表示
    font: font,
    fontSize: 15,
    textColor: "black",
    anchorX: 0.5,
    anchorY: 0.5,
  });
};

// スティック用の画像
module.exports.gSprite_stick0 = function(scene, gConst) {
  return new g.Sprite({
    scene: scene,
    src: scene.asset.getImageById("stick"),
    x: gConst.stick.x,
    y: gConst.stick.y,
    scaleX: gConst.stick.scale[0],
    scaleY: gConst.stick.scale[0],
    anchorX: 0.5,
    anchorY: 0.5,
    opacity: gConst.stick.opacity[0],
    touchable: true,
  });
};
module.exports.gSprite_stick1 = function(scene, gConst) {
  return new g.Sprite({
    scene: scene,
    src: scene.asset.getImageById("stick"),
    x: gConst.stick.x,
    y: gConst.stick.y,
    scaleX: gConst.stick.scale[1],
    scaleY: gConst.stick.scale[1],
    anchorX: 0.5,
    anchorY: 0.5,
    opacity: gConst.stick.opacity[1],
  });
};

// プレーヤー用の画像
module.exports.gSprite_player = function(scene, gConst) {
  return new g.Sprite({
    scene: scene,
    src: scene.asset.getImageById("player"),
    width: gConst.player.width,
    height: gConst.player.height,
    srcX: gConst.player.src.x,
    srcY: gConst.player.src.y,
    x: gConst.layout.base.x,
    y: gConst.layout.base.y,
    scaleX: gConst.player.scale,
    scaleY: gConst.player.scale,
    anchorX: 0.5,
    anchorY: gConst.layout.anchorY,
  });
};


// ストーリー用幕の台紙
module.exports.gRect_story_cover = function(scene) {
  return new g.FilledRect({
    scene: scene,
    cssColor: "gray",
    width: g.game.width,
    height: g.game.height,
    touchable: true,
    // opacity: 0.8,
    // hidden: true,
  });
};
// ストーリーメッセージ用ラベル
module.exports.gLabel_story_msg1 = function(scene, font, n, text) {
  return new g.Label({
    scene: scene,
    x: 1500,
    y: 250, //100+80*n,
    text: ""+text,
    font: font,
    // fontSize: 60,
    anchorY: 0.5,
    // hidden: true,
  });
};

// フィールド用の台紙
module.exports.gRect_field = function(scene, gConst) {
  return new g.FilledRect({
    scene: scene,
    cssColor: "black",
    width: gConst.floor.max_col*(gConst.size.block+2),
    height: gConst.floor.max_raw*(gConst.size.block+2),
    opacity: 0.5,
    touchable: true,
  });
};

// イージーモード用ボタン
module.exports.gLabel_easy = function(scene, gConst, font, text) {
  return new g.Label({
    scene: scene,
    x: 920,
    y: 300,
    text: ""+text,
    font: font,
    fontSize: 24,
    anchorX: 0.5,
    opacity: 0.6,
    touchable: true,
  });
};
// reset用ボタン
module.exports.gLabel_reset = function(scene, gConst, font, text) {
  return new g.Label({
    scene: scene,
    x: 920,
    y: 400,
    text: ""+text,
    font: font,
    fontSize: 24,
    anchorX: 0.5,
    opacity: 1,
    touchable: true,
  });
};
// back用ボタン
module.exports.gLabel_back = function(scene, gConst, font, text) {
  return new g.Label({
    scene: scene,
    x: 920,
    y: 200,
    text: ""+text,
    font: font,
    fontSize: 24,
    anchorX: 0.5,
    opacity: 1,
    touchable: true,
  });
};









// ＝＝＝＝テンプレ＝＝＝＝

// ～～レイアウト用パラメータ～～
const dbg_msg_color = "black"; 	// デバッグメッセージの色
const button_x = 30;		// ヘルプボタン等の右端側の空きスペース
const button_y = 80;		// ヘルプボタン等の上部側の空きスペース
const button_interval = 50;	// ヘルプボタン等の縦並びの間隔
const guide_x = 10;		// ガイド画面の基点x座標
const guide_y = 20;		// ガイド画面の基点y座標
const guide_width = 300;	// ガイド画像の横幅
const guide_height = 270;	// ガイド画像の高さ
const guide_space = 2;		// ガイド画像とガイド操作ボタンウインドウのあいだのスペース幅
const window_height = 28;	// ガイド操作ボタンウインドウの高さ
const window_width = 60;	// ガイド操作ボタンウインドウの各ウインドウの横幅
const window_interval = 5;	// ガイド操作ボタンウインドウの各ウインドウの横幅


// ～～共通～～

// ■デバッグメッセージ表示領域の作成
module.exports.sLabel_debug_msg = function(scene, font) {
  return new g.Label({
      scene: scene,
      text: "debug: 1234567890",
      font: font,
      fontSize: 20,
      textColor: "black", // gConst.dbg_msg_color,
      y: g.game.height,
      anchorY: 1,
  });
};
// ■ログ表示用台紙
module.exports.sRect_log = function(scene) {
  return new g.FilledRect({
    scene: scene,
    local: true,
    cssColor: "#FFFFFF",
    width: 900,
    height: 520,
    // x: 30,
    // y: 30,
    touchable: true,
    // hidden: true,
  });
};
// ■ログレコード表示用ラベル（単体）
module.exports.sLabel_log = function(scene, font, i) {
  return new g.Label({
    scene: scene,
    local: true,
    text: "<"+i+">", // サンプル表示
    font: font,
    fontSize: 12,
    textColor: "black",
    x: 20,
    // y: 50+16*(i%30),
    y: 20+16*i,
    // hidden: true,
  });
};
// ■設定ボタン用画像２（座標直接指定版）
module.exports.sSprite_button_setting2 = function(scene, gConst, a, b, x, y) {
  return new g.Sprite({
    scene: scene,
    local: true,
    src: scene.asset.getImageById("button_setting"),
    width: 27,
    height: 27,
    srcX: 1+a*30,
    srcY: 1+b*30,
    // とりあえず画面の中心に表示
    x: x,
    y: y,
    anchorX: 0.5,
    anchorY: 0.5,
    // hidden: true,
    touchable: true,
  });
};
// ☆メンテ中スクリーン
module.exports.sRect_mente = function(scene) {
  return new g.FilledRect({
    scene: scene,
    cssColor: "gray",
    width: g.game.width,
    height: g.game.height,
    opacity: 0.5,
    touchable: true,
  });
};
// ☆メンテ中メッセージ
module.exports.sLabel_mente = function(scene, font, text) {
  return new g.Label({
    scene: scene,
    x: g.game.width/2,
    y: g.game.height/2,
    text: ""+text,
    font: font,
    fontSize: 20,
    anchorX: 0.5,
    anchorY: 1,
    touchable: true,
  });
};
// ■ニコ生時の自己べ用ラベル
module.exports.sLabel_best = function(scene, font, text) {
  return new g.Label({
    scene: scene,
    x: 440,
    // y: 50,
    text: ""+text,
    font: font,
    fontSize: 15,
    // anchorX: 0.5,
    // anchorY: 1,
    // hidden: 1,
  });
};
// □TIPS画像
module.exports.sSprite_tips = function(scene, gConst) {
  return new g.Sprite({
    scene: scene,
    src: scene.asset.getImageById("tips"),
    x: gConst.tips1.x,
    y: gConst.tips1.y,
    scaleX: 0.25,
    scaleY: 0.25,
    anchorY: 0.5,
    hidden: true,
  });
};
// □TIPS台紙
module.exports.sRect_tips = function(scene, gConst) {
  return new g.FilledRect({
    scene: scene,
    cssColor: "snow",
    width: 100,
    height: 40,
    x: gConst.tips1.x,
    y: gConst.tips1.y,
    anchorY: 0.5,
    hidden: true,
  });
};
// □TIPSラベル
module.exports.sLabel_tips = function(scene, gConst, font, text) {
  return new g.Label({
    scene: scene,
    text: ""+text,
    // textColor: "black",
    font: font,
    fontSize: 30,
    x: gConst.tips1.x+50,
    y: gConst.tips1.y,
    anchorY: 0.5,
    hidden: true,
  });
};
// ■背景画像
module.exports.sSprite_back = function(scene, extra) {
  let src="back";
  if (extra == 1) { src = "back2" }
  return new g.Sprite({
    scene: scene,
    src: scene.asset.getImageById(src),
    touchable: true, // ※迷路で追加
  });
};
// ■ゲーム背景
module.exports.sRect_back = function(scene, gConst) {
  return new g.FilledRect({
    scene: scene,
    cssColor: "white",
    width: g.game.width,
    height: g.game.height,
  });
};
// ■バージョン表示用のラベル
module.exports.sLabel_version = function(scene, font, system) {
  return new g.Label({
    scene: scene,
    text: system.version,
    font: font,
    fontSize: 15,
    x: g.game.width,
    anchorX: 1,
  });
};
// ■残り時間表示用のラベル
module.exports.sLabel_last_time = function(scene, font, text) {
  return new g.Label({
    scene: scene,
    text: ""+text,
    font: font,
    // fontSize: 15,
    x: 810, 
    // y: 80,
    // hidden: true,
  });
};
// ■設定ボタン用画像
//   a: 画像データの横位置
//   b: 画像データの縦位置
//   c: 描写場所の縦位置
module.exports.sSprite_button_setting = function(scene, gConst, a, b, c) {
  return new g.Sprite({
    scene: scene,
    src: scene.asset.getImageById("button_setting"),
    width: 27,
    height: 27,
    srcX: 1+a*30,
    srcY: 1+b*30,
    // とりあえず画面の中心に表示
    x: g.game.width-button_x,
    y: button_y+c*button_interval,
    anchorX: 1,
    // anchorY: 0.5,
    // hidden: true,
    touchable: true,
  });
};
// ■詳細設定用台紙
module.exports.sRect_setting_back = function(scene, gConst) {
  return new g.FilledRect({
    scene: scene,
    cssColor: "#EEEEEE",
    x: g.game.width/2,
    y: button_y,
    width: g.game.width/2,
    height: g.game.height-button_y,
    opacity: 0.9,
    touchable: true,
  });
};
// ■詳細設定項目・項目用ラベル
module.exports.sLabel_setting_text = function(scene, font, system, gConst, c, text) {
  return new g.Label({
    scene: scene,
    text: ""+text,
    font: font,
    fontSize: 25,
    textColor: "dimgray",
    x: g.game.width/2+10,
    y: button_y+c*button_interval,
  });
};
// ■詳細設定項目・設定値用ラベル
module.exports.sLabel_setting_value = function(scene, font, system, gConst, c, text) {
  return new g.Label({
    scene: scene,
    text: ""+text,
    font: font,
    fontSize: 25,
    textColor: "midnightblue",
    x: g.game.width/2+250,
    y: button_y+c*button_interval,
    anchorX: 1,
  });
};
// ■詳細設定項目・変更用ボタン
//   a: 0:↑, 1:↓, 2:→
//   b: 描写場所の横位置
//   c: 描写場所の縦位置
module.exports.sSprite_button_updown = function(scene, gConst, a, b, c) {
  return new g.Sprite({
    scene: scene,
    src: scene.asset.getImageById("button_setting"),
    width: 27,
    height: 27,
    srcX: 1+1*30,
    srcY: 1+(4+a)*30,
    x: g.game.width/2+250+15+(1-b)*button_interval,
    y: button_y+c*button_interval,
    // anchorY: 0.5,
    // hidden: true,
    touchable: true,
  });
};
// ヘルプ画像（一枚もの利用時）
module.exports.sSprite_help1 = function(scene) {
  return new g.Sprite({
    scene: scene,
    src: scene.asset.getImageById("help"),
    // width: 874, //948,
    // height: 482, //481,
    // srcX: 1,
    // srcY: 58,
    // x: 820,// 949, // タイトル時の初期位置は少しずらす
    // y: 150,// 58, // タイトル時の初期位置は少しずらす
    scaleX: 0.6,
    scaleY: 0.6,
    anchorX: 1,
    touchable: true,
  });
};
// ■ヘルプ画面2（詳細複数ページ利用時の単体分）
module.exports.sSprite_help2 = function(scene, help_id) {
  return new g.Sprite({
    scene: scene,
    src: scene.asset.getImageById(help_id),
    // width: 900,
    // x: 13,
    // y: 25,
    hidden : true,
    touchable: true,
  });
};
// ■ヘルプ画面のページ情報のラベル
module.exports.sLabel_help_page = function(scene, font, gConst) {
  return new g.Label({
    scene: scene,
    text: "page",
    font: font,
    fontSize: 15,
    x: 895,
    y: 95,
    anchorX: 1,
  });
};


// ～～タイトル～～

// ■タイトル背景
module.exports.tRect_back = function(scene, gConst) {
  return new g.FilledRect({
    scene: scene,
    cssColor: gConst.title_back_color,
    width: g.game.width,
    height: g.game.height,
  });
};
// ■タイトル画像
module.exports.tSprite_title = function(scene) {
  return new g.Sprite({
    scene: scene,
    src: scene.asset.getImageById("title"),
    x: 60,
    y: 30,
  });
};
// ■タイトルラベル
module.exports.tLabel_title = function(scene, font, gConst, text) {
  return new g.Label({
    scene: scene,
    text: text,
    font: font,
    x: 60, //280, //60,
    y: 30, //180, //30,
  });
};
// ■スキップボタン(スタートボタン)用画像
module.exports.tSprite_start = function(scene) {
  return new g.Sprite({
    scene: scene,
    src: scene.asset.getImageById("start"),
    x: 650, //550, // g.game.width*3/4-25, // 
    y: 120, //30,
    touchable: true, 
  });
};
// ■更新情報表示用ボタンの画像
module.exports.tSprite_button_new = function(scene) {
  return new g.Sprite({
    scene: scene,
    src: scene.asset.getImageById("button_new"), // ("button_title_guide"), // ("title_guide"),
    x: g.game.width/4+25, // 700, // 65,
    y: 300, // 120,
    // width: 401,
    // height: 251,
    anchorX: 0.5,
    anchorY: 0.5,    
    touchable: true,     
  });
};
// ■更新情報表示用ボタンのラベル
module.exports.tLabel_button_new = function(scene, font, gConst, text) {
  return new g.Label({
    scene: scene,
    text: text,
    textColor: "gray",
    font: font,
    fontSize: 20,
    x: g.game.width/4+25, // 700, // 65,
    y: 300, // 120,
    anchorX: 0.5,
    anchorY: 0.5,    
  });
};
// ■更新情報表示の台紙
module.exports.tRect_new = function(scene) {
  return new g.FilledRect({
    scene: scene,
    cssColor: "snow",
    width: 800,
    height: 95,
    x: 50,
    y: 180,
  });
};
// ■更新情報表示のラベル
module.exports.tLabel_new = function(scene, font, color, line, text) {
  return new g.Label({
    scene: scene,
    text: text,
    textColor: color,
    font: font,
    fontSize: 20,
    x: 60, // 65,
    y: 185+30*line, // 120,
  });
};
// ■更新情報表示切替の各種ボタン
//   a (0:>、1:<)
module.exports.tSprite_button_new_setting = function(scene, gConst, a) {
  return new g.Sprite({
    scene: scene,
    src: scene.asset.getImageById("button_setting"),
    width: 27,
    height: 27,
    srcX: 1+30*1,
    srcY: 1+30*(6+3*a),
    x: 400-a*35, // 850-a*35,
    y: 180,
    anchorX: 1,
    anchorY: 0.5,
    touchable: true,
  });
};


// ～～ゲーム～～

// ■ゲーム背景
module.exports.gRect_back = function(scene, gConst) {
  return new g.FilledRect({
    scene: scene,
    cssColor: gConst.game_back_color,
    width: g.game.width,
    height: g.game.height,
  });
};
// ■Readyカウントダウン用ラベル
module.exports.gLabel_ready_countdown = function(scene, gConst, font, text) {
  return new g.Label({
    scene: scene,
    text: text,
    font: font,
    x: g.game.width/2,
    y: g.game.height/2,
    // x: gConst.layout.base_x+0.5*gConst.mainfield.width,
    // y: gConst.layout.base_y+0.5*gConst.mainfield.height-100,
    anchorX: 0.5,
    anchorY: 0.5,
    hidden: true,
  });
};
// ■スコア文字のラベル
module.exports.gLabel_score_header = function(scene, font) {
  return new g.Label({
    scene: scene,
    text: "score",
    font: font,
    fontSize: 25,
    x: 20,
    y: 50,
    anchorY: 1,
  });
};
// ■スコアのラベル
module.exports.gLabel_score = function(scene, font) {
  return new g.Label({
    scene: scene,
    text: "0", // "123456",
    font: font,
    x: 320,
    y: 50,
    anchorX: 1,
    anchorY: 1,
  });
};
// ■スコアプラスのラベル
module.exports.gLabel_score_plus = function(scene, font) {
  return new g.Label({
    scene: scene,
    text: "",
    font: font,
    fontSize: 35,
    x: 340, // 320,
    y:  50, // 90,
    // anchorX: 1,
    anchorY: 1,
    // hidden: true,
  });
};
// ■コンボ（継続）数表示のラベル　⇒ゲーム・テンプレへ
module.exports.gLabel_combo = function(scene, gConst, font, text) {
  return new g.Label({
    scene: scene,
    text: "",
    font: font,
    fontSize: 35,
    // x: gConst.layout.base_x+0.5*gConst.mainfield.width,
    y: 58,
    anchorX: 0.5,
    // anchorY: 0.5,
    // hidden: true,
  });
};
// ■ラストカウントダウン用ゲーム背景
module.exports.gRect_back_countdown = function(scene) {
  return new g.FilledRect({
    scene: scene,
    cssColor: "red", // "orange",
    width: g.game.width,
    height: g.game.height,
    opacity: 0,
    hidden: true,
  });
};
// ■TimeUp用画像
module.exports.gSprite_timeup = function(scene, gConst) {
  return new g.Sprite({
    scene: scene,
    src: scene.asset.getImageById("timeup"),
    x: g.game.width/2,
    y: g.game.height/2+100,
    // x: gConst.layout.base_x+0.5*gConst.mainfield.width,
    // y: gConst.layout.base_y+0.5*gConst.mainfield.height,
    anchorX: 0.5,
    anchorY: 0.5,
    scaleX: 0, // 表示開始時点ではサイズは０にする
    scaleY: 0, // 表示開始時点ではサイズは０にする
    opacity: 0, // 表示開始時点では透明にする
    touchable: true, 
  });
};
// 終了表示用ラベル
module.exports.gLabel_end = function(scene, font, text) {
  return new g.Label({
    scene: scene,
    x: g.game.width/2,
    y: 400,
    text: ""+text,
    font: font,
    anchorX: 0.5,
    anchorY: 0.5,
    touchable: true,
    hidden: true,
  });
};
// 終了表示用スクリーン
module.exports.gRect_end = function(scene) {
  return new g.FilledRect({
    scene: scene,
    cssColor: "gray",
    width: g.game.width,
    height: g.game.height,
    opacity: 0.5,
    hidden: true,
  });
};


})(g.module.exports, g.module.require, g.module, g.filename, g.dirname);
}