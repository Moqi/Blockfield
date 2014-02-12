import MySql.Data;

var Level:int;
var HasSwapped:boolean;

var BoxMaterial:Material;
var HasCheckpoint:boolean;


function Start () {
	
	Level = 1;
	HasSwapped = false;
	IsLevelSwap();
}

function Update () {
	try
	{
		if(!HasSwapped)
		{		
			if(Level == 2)
			{
				var PedCont = Camera.main.GetComponent("PedestalController") as PedestalController;
				PedCont.PedestalAmount = 6;
				PedCont.Start();
			}
			
			if(Level > 2)
			{
				Application.LoadLevel(4);
				
	//			var Balls : GameObject[];
	//			Balls = GameObject.FindGameObjectsWithTag("Ball"); 
	//						
	//			for (var MyObject : GameObject in Balls)  
	//			{ 
	//				Destroy(MyObject.gameObject);
	//			}				
			}
			
			HasSwapped = true;
		}
		
		if(Input.GetKeyUp(KeyCode.K))
		{
			var PlayerID = InputGUI.ThePlayer.PlayerID;
				
			var ConnectionString = "Server=localhost;Database=blockfield;UserID=root;Password=unlockMYSQL;Pooling=true;";
			var Connection = MySqlClient.MySqlConnection(ConnectionString);
			Connection.Open();
			var Command:MySql.Data.MySqlClient.MySqlCommand;
			
			if(!HasCheckpoint)
			{
				Command = MySql.Data.MySqlClient.MySqlCommand("UPDATE scores SET PosX = ?PosX, PosY = ?PosY WHERE ID = ?ID;", Connection);
			
				var Param4:MySql.Data.MySqlClient.MySqlParameter;
				var Param5:MySql.Data.MySqlClient.MySqlParameter;
				var Param6:MySql.Data.MySqlClient.MySqlParameter;
				
				Param4 = Command.Parameters.AddWithValue("?PosX", GameObject.FindWithTag("Ball").transform.position.x);
				Param5 = Command.Parameters.AddWithValue("?PosY", GameObject.FindWithTag("Ball").transform.position.y);
				Param6 = Command.Parameters.AddWithValue("?ID", PlayerID);
				
				Command.ExecuteNonQuery();
				
				Connection.Close();
				Connection.Dispose();
				HasCheckpoint = true;
			}
			else
			{
				Command = MySql.Data.MySqlClient.MySqlCommand("SELECT * FROM blockfield.scores WHERE ID = ?ID;", Connection);
						
				
				var Param7:MySql.Data.MySqlClient.MySqlParameter;
				Param7 = Command.Parameters.AddWithValue("?ID", PlayerID);
				DataReader = Command.ExecuteReader();
				while(DataReader.Read())
				{		
					var X:int;
					var Y:int;
					
					X = DataReader["PosX"];
					Y = DataReader["PosY"];
					
					GameObject.FindWithTag("Ball").transform.position = new Vector3(X, Y, 5);
					break;
				}
				
				Connection.Close();
				Connection.Dispose();
				HasCheckpoint = false;
			}			
		}
			
	}
	catch(err)
	{
	}
}

function IsLevelSwap()
{
	for(;;)
	{
		var Objects : GameObject[];
	    Objects = GameObject.FindGameObjectsWithTag("Box"); 
	 	
	 	if(Objects.Length > 0)
	    {
		 	var AllGreen:boolean = true;
		 	
			for (var MyObject : GameObject in Objects)  
			{ 
				if(BoxMaterial != MyObject.renderer.sharedMaterial)
				{
					AllGreen = false;
				}
			}		
			
			if(AllGreen)
			{
				for (var MyObject : GameObject in Objects)  
				{ 
					Destroy(MyObject.gameObject);
				}
				
				var Pedestals : GameObject[];
		    	Pedestals = GameObject.FindGameObjectsWithTag("Pedestal"); 
				
				for (var MyObject : GameObject in Pedestals)  
				{ 
					Destroy(MyObject.gameObject);
				}
				
				HasSwapped = false;
				HasCheckpoint = false;
				Level++;
			}
			
		}
		
		yield WaitForSeconds(0.1);
	} 
}