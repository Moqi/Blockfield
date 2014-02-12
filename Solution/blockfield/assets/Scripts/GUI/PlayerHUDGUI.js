#pragma strict

var Skin:GUISkin;
var Lives:int;

function Start () {

	Lives = 3;
}

function Update () {

}

function OnGUI()
{
	GUI.skin = Skin;
	GUI.Label(Rect(15, Screen.height - 80, 200, 50), "Lives:" + Lives);
	GUI.Label(Rect(15, Screen.height - 50, 200, 50), InputGUI.ThePlayer.Name + " " + InputGUI.ThePlayer.Score);
}