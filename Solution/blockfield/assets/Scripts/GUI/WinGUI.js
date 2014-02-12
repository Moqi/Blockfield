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
	
    GUI.Label(Rect((Screen.width / 2) - 100, (Screen.height / 2), 200, 50), "You Win!");
	
	if(GUI.Button(Rect((Screen.width / 2) - 100, (Screen.height / 2) + 150, 200, 30), "Start Over"))
	{
		Application.LoadLevel(0);
	}
}