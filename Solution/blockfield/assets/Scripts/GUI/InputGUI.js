import MySql.Data;

var Skin:GUISkin;
var PlayerName:String;
static var ThePlayer:Player;

function Start () {

	PlayerName = "";
	
}

function Update () {

}

function OnGUI()
{
	GUI.skin = Skin;
	
	
	GUI.Label(Rect((Screen.width / 2) - 100, (Screen.height / 2) - 30, 200, 30), "Player Name:");
	
	PlayerName = GUI.TextField(Rect((Screen.width/2) - 100, Screen.height/2, 200, 30), PlayerName);
	
	if(GUI.Button(Rect((Screen.width/2) - 100, (Screen.height/2) + 40, 200, 30), "Start"))
	{
		ThePlayer = new Player(PlayerName);
		ThePlayer.Save();
		Application.LoadLevel(2);
	}
}

class Connection
{
	var ConnectionString = "Server=localhost;Database=blockfield;UserID=root;Password=unlockMYSQL;Pooling=true;";
	var Connection;
	var Command;
	var DataReader;
}

class Player extends Connection
{
	var PlayerID:int;
	var Name:String;
	var Score:int;
	
	function Player(name:String)
	{
		Name = name;
		Score = 0;
		PlayerID = 0;
	}
	
	function Player(name:String, score:int)
	{
		Name = name;
		Score = score;
		PlayerID = 0;
	}
	
	function Player(playerid:int, name:String, score:int)
	{
		Name = name;
		Score = score;
		PlayerID = playerid;
	}
	
	function Save()
	{	
		try
		{
			Connection = MySqlClient.MySqlConnection(ConnectionString);
			Connection.Open();
			
			var Command:MySql.Data.MySqlClient.MySqlCommand;
			
			if(PlayerID == 0)
			{
				Command = MySql.Data.MySqlClient.MySqlCommand("INSERT INTO scores (ID, PlayerName, PlayerScore) VALUES (?ID, ?PlayerName, ?PlayerScore);", Connection);
			
				var Param1:MySql.Data.MySqlClient.MySqlParameter;
				var Param2:MySql.Data.MySqlClient.MySqlParameter;
				var Param3:MySql.Data.MySqlClient.MySqlParameter;
				
				Param1 = Command.Parameters.AddWithValue("?ID", null);
				Param2 = Command.Parameters.AddWithValue("?PlayerName", Name);
				Param3 = Command.Parameters.AddWithValue("?PlayerScore", Score);
				
				Command.ExecuteNonQuery();
				PlayerID = Command.LastInsertedId;
			}
			else
			{
				Command = MySql.Data.MySqlClient.MySqlCommand("UPDATE scores SET PlayerScore = ?PlayerScore WHERE ID = ?ID;", Connection);
			
				var Param4:MySql.Data.MySqlClient.MySqlParameter;
				var Param5:MySql.Data.MySqlClient.MySqlParameter;
				
				Param4 = Command.Parameters.AddWithValue("?PlayerScore", Score);
				Param5 = Command.Parameters.AddWithValue("?ID", PlayerID);
				
				Command.ExecuteNonQuery();	
			}
			
			Connection.Close();
			Connection.Dispose();
		}
		catch(e)
		{
			Debug.Log(e.ToString());
		}
	}
	
	function Stringify()
	{
		return Name + " " + Score;
	}
}
