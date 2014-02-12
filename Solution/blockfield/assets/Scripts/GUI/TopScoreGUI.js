import MySql.Data;

var ScoreList;
var Skin:GUISkin;

function Start () {
	
	var ScoreManager = new ScoreManager();
	ScoreList = ScoreManager.RetrieveScoreList();
	
}

function Update () {

}

function OnGUI()
{
	GUI.skin = Skin;

	var i:int = 0;
	
	for(var myPlayer: Player in ScoreList)
	{
		i++;
		GUI.Label(Rect((Screen.width / 2) - 100, (Screen.height / 2) + (30 * i) - 50, 200, 30), (i) + ". " + myPlayer.Name);
		GUI.Label(Rect((Screen.width / 2) + 100, (Screen.height / 2) + (30 * i) - 50, 200, 30), myPlayer.Score.ToString());
	}
	
	if(GUI.Button(Rect((Screen.width / 2) - 100, (Screen.height / 2) - 100, 200, 30), "Back"))
	{
		Application.LoadLevel(0);
	}
	
}

class ScoreManager extends Connection
{
	var Players;
	
	function RetrieveScoreList()
	{	
		try
		{	
			Connection = MySqlClient.MySqlConnection(ConnectionString);
			Connection.Open();
		
			Players = new Array();

			Command = MySql.Data.MySqlClient.MySqlCommand("SELECT * FROM blockfield.scores ORDER BY PlayerScore DESC LIMIT 10;", Connection);
			DataReader = Command.ExecuteReader();		
			
			while(DataReader.Read())
			{
				var myPlayer = new Player(DataReader["PlayerName"].ToString(), parseInt(DataReader["PlayerScore"]));
				Players.Add(myPlayer);
			}
			
			Connection.Close();
			Connection.Dispose();
		
			return Players;
		}
		catch(e)
		{
			Debug.Log(e.ToString());
		}
	}
}