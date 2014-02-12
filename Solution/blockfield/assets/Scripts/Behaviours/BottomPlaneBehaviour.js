#pragma strict

var BottomMost:float;

function Start () {
	
	BottomMost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).y;
	transform.position.y = BottomMost;
	
}

function Update () {

}