#pragma strict

function Start () {

}	

function Update () {

	var Objects : GameObject[];
    Objects = GameObject.FindGameObjectsWithTag("Box"); 
 
	for (var MyObject : GameObject in Objects)  { 
			
		Physics.IgnoreCollision(this.collider, MyObject.gameObject.collider);
	} 
	
	transform.position.x = Camera.main.ScreenToWorldPoint(Vector3(Input.mousePosition.x, 0, 0)).x;
	transform.position.y = Camera.main.ScreenToWorldPoint(Vector3(0, Input.mousePosition.y, 0)).y;

}

