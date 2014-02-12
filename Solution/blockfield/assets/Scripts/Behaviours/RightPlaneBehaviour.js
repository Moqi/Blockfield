#pragma strict

var RightMost:float;

function Start () {
	
	RightMost = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x;
	transform.position.x = RightMost;
	
}

function Update () {

}