#pragma strict

var TopMost:float;

function Start () {

	TopMost = Camera.main.ScreenToWorldPoint(Vector3(0,Screen.height,0)).y;
	transform.position.y = TopMost;

}

function Update () {

}