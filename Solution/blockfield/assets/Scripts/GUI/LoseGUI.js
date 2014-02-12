#pragma strict

var Skin:GUISkin;

function Start () {
			var Balls : GameObject[];
			Balls = GameObject.FindGameObjectsWithTag("Ball"); 
						
			for (var MyObject : GameObject in Balls)  
			{ 
				Destroy(MyObject.gameObject);
			}	
}

function Update () {
	

	
	
}

function OnGUI(){
	
	GUI.skin = Skin;
	
    GUI.Label(Rect((Screen.width / 2) - 105, (Screen.height / 2), 210, 50), "You Lose!");
	
	if(GUI.Button(Rect((Screen.width / 2) - 100, (Screen.height / 2) + 150, 200, 30), "Start Over"))
	{
		Application.LoadLevel(0);
	}
}