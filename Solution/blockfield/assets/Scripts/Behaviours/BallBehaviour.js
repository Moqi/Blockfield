#pragma strict

function Start () {

	rigidbody.AddForce(Vector3(1,-1,0) * 500);

}

function Update () {
	
}

function OnCollisionEnter()
{

}

function OnCollisionExit(otherObject:Collision)
{
	rigidbody.velocity = rigidbody.velocity.normalized * 12;
	
	if(otherObject.gameObject.tag == "Box")
	{
		var BoxBehaviour = otherObject.gameObject.GetComponent("BoxBehaviour") as BoxBehaviour;
		
		if(!BoxBehaviour.HasScored)
		{
			if(!BoxBehaviour.IsGreen)
			{
				InputGUI.ThePlayer.Score++;
				BoxBehaviour.HasScored = true;
				InputGUI.ThePlayer.Save();
			}
		}
		
		otherObject.gameObject.transform.position.z = 6;
	}
}

function OnBecameInvisible()
{
	try
	{
		var PlayerScoreScript = Camera.main.GetComponent("PlayerHUDGUI") as PlayerHUDGUI;
		
		if(PlayerScoreScript.Lives >= 0)
		{
			var LevelController = Camera.main.GetComponent("LevelController") as LevelController;
			
			if(LevelController.Level < 3)
			{
				PlayerScoreScript.Lives--;
			}
		}
		
		if(PlayerScoreScript.Lives < 0)
		{
			Application.LoadLevel(5);
		}
		else
		{
			var BallScript = Camera.main.GetComponent("BallController") as BallController;
			BallScript.Start();
		}
		
		Destroy(this.gameObject);
	}
	catch(err)
	{
	}
}