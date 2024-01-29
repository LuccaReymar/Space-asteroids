gdjs.TitleSceneCode = {};
gdjs.TitleSceneCode.GDPlayerObjects1= [];
gdjs.TitleSceneCode.GDPlayerObjects2= [];
gdjs.TitleSceneCode.GDBulletObjects1= [];
gdjs.TitleSceneCode.GDBulletObjects2= [];
gdjs.TitleSceneCode.GDBigAsteroidObjects1= [];
gdjs.TitleSceneCode.GDBigAsteroidObjects2= [];
gdjs.TitleSceneCode.GDMediumAsteroidObjects1= [];
gdjs.TitleSceneCode.GDMediumAsteroidObjects2= [];
gdjs.TitleSceneCode.GDSmallAsteroidObjects1= [];
gdjs.TitleSceneCode.GDSmallAsteroidObjects2= [];
gdjs.TitleSceneCode.GDLifeBarObjects1= [];
gdjs.TitleSceneCode.GDLifeBarObjects2= [];
gdjs.TitleSceneCode.GDGameOverObjects1= [];
gdjs.TitleSceneCode.GDGameOverObjects2= [];
gdjs.TitleSceneCode.GDDeathShipParticleObjects1= [];
gdjs.TitleSceneCode.GDDeathShipParticleObjects2= [];
gdjs.TitleSceneCode.GDDeathDebrisParticleObjects1= [];
gdjs.TitleSceneCode.GDDeathDebrisParticleObjects2= [];
gdjs.TitleSceneCode.GDDebrisHugeObjects1= [];
gdjs.TitleSceneCode.GDDebrisHugeObjects2= [];
gdjs.TitleSceneCode.GDDebrisMediumObjects1= [];
gdjs.TitleSceneCode.GDDebrisMediumObjects2= [];
gdjs.TitleSceneCode.GDDebrisSmallObjects1= [];
gdjs.TitleSceneCode.GDDebrisSmallObjects2= [];
gdjs.TitleSceneCode.GDBulletHitObjects1= [];
gdjs.TitleSceneCode.GDBulletHitObjects2= [];
gdjs.TitleSceneCode.GDBulletFlashObjects1= [];
gdjs.TitleSceneCode.GDBulletFlashObjects2= [];
gdjs.TitleSceneCode.GDStarBackgroundObjects1= [];
gdjs.TitleSceneCode.GDStarBackgroundObjects2= [];
gdjs.TitleSceneCode.GDMotionTrailObjects1= [];
gdjs.TitleSceneCode.GDMotionTrailObjects2= [];
gdjs.TitleSceneCode.GDTutorialTextObjects1= [];
gdjs.TitleSceneCode.GDTutorialTextObjects2= [];
gdjs.TitleSceneCode.GDContinueTextObjects1= [];
gdjs.TitleSceneCode.GDContinueTextObjects2= [];
gdjs.TitleSceneCode.GDRightButtonObjects1= [];
gdjs.TitleSceneCode.GDRightButtonObjects2= [];
gdjs.TitleSceneCode.GDLeftButtonObjects1= [];
gdjs.TitleSceneCode.GDLeftButtonObjects2= [];
gdjs.TitleSceneCode.GDTopButtonObjects1= [];
gdjs.TitleSceneCode.GDTopButtonObjects2= [];
gdjs.TitleSceneCode.GDFireButtonObjects1= [];
gdjs.TitleSceneCode.GDFireButtonObjects2= [];
gdjs.TitleSceneCode.GDEnemyBulletObjects1= [];
gdjs.TitleSceneCode.GDEnemyBulletObjects2= [];
gdjs.TitleSceneCode.GDEnemyObjects1= [];
gdjs.TitleSceneCode.GDEnemyObjects2= [];
gdjs.TitleSceneCode.GDTitleTextObjects1= [];
gdjs.TitleSceneCode.GDTitleTextObjects2= [];
gdjs.TitleSceneCode.GDPlayButtonObjects1= [];
gdjs.TitleSceneCode.GDPlayButtonObjects2= [];
gdjs.TitleSceneCode.GDCreatorTextObjects1= [];
gdjs.TitleSceneCode.GDCreatorTextObjects2= [];
gdjs.TitleSceneCode.GDDeathEnemyParticleObjects1= [];
gdjs.TitleSceneCode.GDDeathEnemyParticleObjects2= [];
gdjs.TitleSceneCode.GDTimeTextObjects1= [];
gdjs.TitleSceneCode.GDTimeTextObjects2= [];
gdjs.TitleSceneCode.GDTimeText2Objects1= [];
gdjs.TitleSceneCode.GDTimeText2Objects2= [];
gdjs.TitleSceneCode.GDTimeText3Objects1= [];
gdjs.TitleSceneCode.GDTimeText3Objects2= [];
gdjs.TitleSceneCode.GDTimeText4Objects1= [];
gdjs.TitleSceneCode.GDTimeText4Objects2= [];


gdjs.TitleSceneCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BigAsteroid"), gdjs.TitleSceneCode.GDBigAsteroidObjects1);
gdjs.copyArray(runtimeScene.getObjects("MediumAsteroid"), gdjs.TitleSceneCode.GDMediumAsteroidObjects1);
gdjs.copyArray(runtimeScene.getObjects("SmallAsteroid"), gdjs.TitleSceneCode.GDSmallAsteroidObjects1);
{for(var i = 0, len = gdjs.TitleSceneCode.GDBigAsteroidObjects1.length ;i < len;++i) {
    gdjs.TitleSceneCode.GDBigAsteroidObjects1[i].setAnimation(gdjs.random(3));
}
}{for(var i = 0, len = gdjs.TitleSceneCode.GDMediumAsteroidObjects1.length ;i < len;++i) {
    gdjs.TitleSceneCode.GDMediumAsteroidObjects1[i].setAnimation(gdjs.random(1));
}
}{for(var i = 0, len = gdjs.TitleSceneCode.GDSmallAsteroidObjects1.length ;i < len;++i) {
    gdjs.TitleSceneCode.GDSmallAsteroidObjects1[i].setAnimation(gdjs.random(1));
}
}{for(var i = 0, len = gdjs.TitleSceneCode.GDBigAsteroidObjects1.length ;i < len;++i) {
    gdjs.TitleSceneCode.GDBigAsteroidObjects1[i].setAngle(gdjs.random(360));
}
for(var i = 0, len = gdjs.TitleSceneCode.GDMediumAsteroidObjects1.length ;i < len;++i) {
    gdjs.TitleSceneCode.GDMediumAsteroidObjects1[i].setAngle(gdjs.random(360));
}
for(var i = 0, len = gdjs.TitleSceneCode.GDSmallAsteroidObjects1.length ;i < len;++i) {
    gdjs.TitleSceneCode.GDSmallAsteroidObjects1[i].setAngle(gdjs.random(360));
}
}{for(var i = 0, len = gdjs.TitleSceneCode.GDBigAsteroidObjects1.length ;i < len;++i) {
    gdjs.TitleSceneCode.GDBigAsteroidObjects1[i].setPosition(gdjs.TitleSceneCode.GDBigAsteroidObjects1[i].getX() +(gdjs.randomInRange(-(32), 32)),gdjs.TitleSceneCode.GDBigAsteroidObjects1[i].getY() +(gdjs.randomInRange(-(32), 32)));
}
for(var i = 0, len = gdjs.TitleSceneCode.GDMediumAsteroidObjects1.length ;i < len;++i) {
    gdjs.TitleSceneCode.GDMediumAsteroidObjects1[i].setPosition(gdjs.TitleSceneCode.GDMediumAsteroidObjects1[i].getX() +(gdjs.randomInRange(-(32), 32)),gdjs.TitleSceneCode.GDMediumAsteroidObjects1[i].getY() +(gdjs.randomInRange(-(32), 32)));
}
for(var i = 0, len = gdjs.TitleSceneCode.GDSmallAsteroidObjects1.length ;i < len;++i) {
    gdjs.TitleSceneCode.GDSmallAsteroidObjects1[i].setPosition(gdjs.TitleSceneCode.GDSmallAsteroidObjects1[i].getX() +(gdjs.randomInRange(-(32), 32)),gdjs.TitleSceneCode.GDSmallAsteroidObjects1[i].getY() +(gdjs.randomInRange(-(32), 32)));
}
}}

}


};gdjs.TitleSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.TitleSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.TitleSceneCode.eventsList2 = function(runtimeScene) {

{



}


{


gdjs.TitleSceneCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.TitleSceneCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleSceneCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.TitleSceneCode.GDPlayButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.TitleSceneCode.GDPlayButtonObjects1[k] = gdjs.TitleSceneCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.TitleSceneCode.GDPlayButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PlayScene", false);
}}

}


};

gdjs.TitleSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleSceneCode.GDPlayerObjects1.length = 0;
gdjs.TitleSceneCode.GDPlayerObjects2.length = 0;
gdjs.TitleSceneCode.GDBulletObjects1.length = 0;
gdjs.TitleSceneCode.GDBulletObjects2.length = 0;
gdjs.TitleSceneCode.GDBigAsteroidObjects1.length = 0;
gdjs.TitleSceneCode.GDBigAsteroidObjects2.length = 0;
gdjs.TitleSceneCode.GDMediumAsteroidObjects1.length = 0;
gdjs.TitleSceneCode.GDMediumAsteroidObjects2.length = 0;
gdjs.TitleSceneCode.GDSmallAsteroidObjects1.length = 0;
gdjs.TitleSceneCode.GDSmallAsteroidObjects2.length = 0;
gdjs.TitleSceneCode.GDLifeBarObjects1.length = 0;
gdjs.TitleSceneCode.GDLifeBarObjects2.length = 0;
gdjs.TitleSceneCode.GDGameOverObjects1.length = 0;
gdjs.TitleSceneCode.GDGameOverObjects2.length = 0;
gdjs.TitleSceneCode.GDDeathShipParticleObjects1.length = 0;
gdjs.TitleSceneCode.GDDeathShipParticleObjects2.length = 0;
gdjs.TitleSceneCode.GDDeathDebrisParticleObjects1.length = 0;
gdjs.TitleSceneCode.GDDeathDebrisParticleObjects2.length = 0;
gdjs.TitleSceneCode.GDDebrisHugeObjects1.length = 0;
gdjs.TitleSceneCode.GDDebrisHugeObjects2.length = 0;
gdjs.TitleSceneCode.GDDebrisMediumObjects1.length = 0;
gdjs.TitleSceneCode.GDDebrisMediumObjects2.length = 0;
gdjs.TitleSceneCode.GDDebrisSmallObjects1.length = 0;
gdjs.TitleSceneCode.GDDebrisSmallObjects2.length = 0;
gdjs.TitleSceneCode.GDBulletHitObjects1.length = 0;
gdjs.TitleSceneCode.GDBulletHitObjects2.length = 0;
gdjs.TitleSceneCode.GDBulletFlashObjects1.length = 0;
gdjs.TitleSceneCode.GDBulletFlashObjects2.length = 0;
gdjs.TitleSceneCode.GDStarBackgroundObjects1.length = 0;
gdjs.TitleSceneCode.GDStarBackgroundObjects2.length = 0;
gdjs.TitleSceneCode.GDMotionTrailObjects1.length = 0;
gdjs.TitleSceneCode.GDMotionTrailObjects2.length = 0;
gdjs.TitleSceneCode.GDTutorialTextObjects1.length = 0;
gdjs.TitleSceneCode.GDTutorialTextObjects2.length = 0;
gdjs.TitleSceneCode.GDContinueTextObjects1.length = 0;
gdjs.TitleSceneCode.GDContinueTextObjects2.length = 0;
gdjs.TitleSceneCode.GDRightButtonObjects1.length = 0;
gdjs.TitleSceneCode.GDRightButtonObjects2.length = 0;
gdjs.TitleSceneCode.GDLeftButtonObjects1.length = 0;
gdjs.TitleSceneCode.GDLeftButtonObjects2.length = 0;
gdjs.TitleSceneCode.GDTopButtonObjects1.length = 0;
gdjs.TitleSceneCode.GDTopButtonObjects2.length = 0;
gdjs.TitleSceneCode.GDFireButtonObjects1.length = 0;
gdjs.TitleSceneCode.GDFireButtonObjects2.length = 0;
gdjs.TitleSceneCode.GDEnemyBulletObjects1.length = 0;
gdjs.TitleSceneCode.GDEnemyBulletObjects2.length = 0;
gdjs.TitleSceneCode.GDEnemyObjects1.length = 0;
gdjs.TitleSceneCode.GDEnemyObjects2.length = 0;
gdjs.TitleSceneCode.GDTitleTextObjects1.length = 0;
gdjs.TitleSceneCode.GDTitleTextObjects2.length = 0;
gdjs.TitleSceneCode.GDPlayButtonObjects1.length = 0;
gdjs.TitleSceneCode.GDPlayButtonObjects2.length = 0;
gdjs.TitleSceneCode.GDCreatorTextObjects1.length = 0;
gdjs.TitleSceneCode.GDCreatorTextObjects2.length = 0;
gdjs.TitleSceneCode.GDDeathEnemyParticleObjects1.length = 0;
gdjs.TitleSceneCode.GDDeathEnemyParticleObjects2.length = 0;
gdjs.TitleSceneCode.GDTimeTextObjects1.length = 0;
gdjs.TitleSceneCode.GDTimeTextObjects2.length = 0;
gdjs.TitleSceneCode.GDTimeText2Objects1.length = 0;
gdjs.TitleSceneCode.GDTimeText2Objects2.length = 0;
gdjs.TitleSceneCode.GDTimeText3Objects1.length = 0;
gdjs.TitleSceneCode.GDTimeText3Objects2.length = 0;
gdjs.TitleSceneCode.GDTimeText4Objects1.length = 0;
gdjs.TitleSceneCode.GDTimeText4Objects2.length = 0;

gdjs.TitleSceneCode.eventsList2(runtimeScene);

return;

}

gdjs['TitleSceneCode'] = gdjs.TitleSceneCode;
