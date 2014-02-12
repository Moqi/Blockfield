#pragma strict

var Pedestal:Rigidbody;
var PedestalAmount:int;

function Start () {
	
	for(var i = 0; i < PedestalAmount; i++)
	{
		var RandomX = Camera.main.ScreenToWorldPoint(Vector3(Random.Range(400, Screen.width - 20), 0, 0)).x;
		var Y = Camera.main.ScreenToWorldPoint(Vector3(0, 0, 0)).y;
	
		Instantiate(Pedestal, Vector3(RandomX, Y + 1.5, 5), Quaternion.identity);
	}
	
}

function Update () {

}
