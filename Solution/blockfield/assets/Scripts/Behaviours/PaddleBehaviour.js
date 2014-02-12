#pragma strict

function Start () {

	transform.position.x = camera.main.ScreenToWorldPoint(Vector3(20,0,0)).x;
	
}

function Update () {


		transform.Translate(Vector3(0,1,0) * Input.GetAxis("Vertical") * 20 * Time.deltaTime);

	
	
}