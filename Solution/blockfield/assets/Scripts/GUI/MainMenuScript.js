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

function OnGUI()
{
	GUI.skin = Skin;
	
	if(GUI.Button(Rect((Screen.width / 2) - 100, (Screen.height / 2), 200, 30), "New Game"))
	{
		Application.LoadLevel(1);
	}
	
	if(GUI.Button(Rect((Screen.width / 2) - 100, (Screen.height / 2) + 35, 200, 30), "Top Scores"))
	{
		Application.LoadLevel(3);
	}
	
	if(GUI.Button(Rect((Screen.width / 2) - 100, (Screen.height / 2) + 70, 200, 30), "Quit"))
	{
		Application.Quit();
	}
	
}