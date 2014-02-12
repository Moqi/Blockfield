#pragma strict

var Ball:Rigidbody;

function Start () {
	
	try
	{
		var Balls : GameObject[];
		Balls = GameObject.FindGameObjectsWithTag("Ball"); 
					
		for (var MyObject : GameObject in Balls)  
		{ 
			Destroy(MyObject.gameObject);
		}
		
		var X = Camera.main.ScreenToWorldPoint(Vector3((Screen.width / 2), 0, 0)).x;
		var Y = Camera.main.ScreenToWorldPoint(Vector3(0, (Screen.height / 2), 0)).y;
		
		Instantiate(Ball, Vector3(X, Y, 5), Quaternion.identity);
	}
	catch(err)
	{
	}
	
}

function Update () {

}