#pragma strict

var InitialY:float;
var GreenMaterial:Material;
var RedMaterial:Material;

var HasScored:boolean;
var IsRed:boolean;
var IsGreen:boolean;

var PlayerScoreScript:PlayerHUDGUI;

function Start () {
	
	HasScored = false;
	IsRed = false;
	IsGreen = false;
	
	InitialY = transform.position.y;
	PlayerScoreScript = Camera.main.GetComponent("PlayerHUDGUI") as PlayerHUDGUI;
	
	CheckPosition();
}

function Update () {

	if(transform.position.y + 0.5 >= InitialY)
	{
		if(!IsRed)
		{
			renderer.material = RedMaterial;
			IsRed = true;
			IsGreen = false;
		}
	}
	else
	{
		if(!IsGreen)
		{
			renderer.material = GreenMaterial;
			IsRed = false;
			IsGreen = true;
		}
		
	}
}

function CheckPosition()
{
	for(;;)
	{
		if((transform.position.y <= Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).y + 1))
		{
			transform.rotation = Quaternion.identity;
			collider.material = null;
			rigidbody.useGravity = false;
			rigidbody.isKinematic = true;
		}

		yield WaitForSeconds(0.1);
	}
}
