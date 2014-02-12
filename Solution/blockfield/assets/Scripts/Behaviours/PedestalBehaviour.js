#pragma strict

var Box:Rigidbody;

function Start () {
	
	Instantiate(Box, Vector3(transform.position.x, transform.position.y + 2, 5), Quaternion.identity);
}

function Update () {

}