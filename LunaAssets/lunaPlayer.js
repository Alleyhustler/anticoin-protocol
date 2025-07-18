function spawnPlayer() {
    document.getElementById("lunaSelection").innerHTML = `
    <div id="lunaPlayerContainer">
  
  
  <div id="playerPortraits">
  <h1>Player Portraits (includes some old ones)</h1>
  <img src="LunaAssets/Portraits/OldVamp.png">
  <img src="LunaAssets/Portraits/C_ART_01.png">
  <img src="LunaAssets/Portraits/C_ART_02.png">
  <img src="LunaAssets/Portraits/C_ART_03.png">
  <img src="LunaAssets/Portraits/C_ART_04.png">
  <img src="LunaAssets/Portraits/C_ART_05.png">
  <img src="LunaAssets/Portraits/C_ART_06.png">
  <img src="LunaAssets/Portraits/C_ART_07.png">
  <img src="LunaAssets/Portraits/C_ART_08.png">
  <img src="LunaAssets/Portraits/C_ART_09.png">
  <img src="LunaAssets/Portraits/C_ART_10.png">
  <img src="LunaAssets/Portraits/C_ART_11.png">
  <img src="LunaAssets/Portraits/C_ART_12.png">
  <img src="LunaAssets/Portraits/C_ART_13.png">
  <img src="LunaAssets/Portraits/C_ART_14.png">
  <img src="LunaAssets/Portraits/C_ART_15.png">
  <img src="LunaAssets/Portraits/C_ART_16.png">
  </div>
  
  <br>
  <h1>Player Classes</h1>
  <div id="playerClasses">
  
    <div id="className">
    <h1>Cleric</h1>
      <hr>
      </div>
    
    <div id="classDescription">
      <p>A nurturing healer on a pilgrimage to help those who are lost in the great well. They put others first, for better or worse.</p>
    </div>
    
    <div id="classStats">
      <table>
    <tr>
    <td>Level</td>
    <td>8</td>
    
    <td>STR</td>
    <td>8</td>
    
    <td>DEX</td>
    <td>5</td>
    </tr>
    <tr>
    <td>HP</td>
    <td>160</td>
    
    <td>DEF</td>
    <td>8</td>
    
    <td>INT</td>
    <td>10</td>
    </tr>
    <tr>
    <td>MP</td>
    <td>96</td>
    
    <td>SPD</td>
    <td>5</td>
    
    <td>RES</td>
    <td>9</td>
    </tr>
    
      </table>
    
      <h2>Vulnerabilities</h2>
      <table>
        
    <tr>
      <td>
    <img src="LunaAssets/Elements/Normal.png" height="30px"> 
    </td>
    
    <td>
    <p>120%</p> 
    </td>
    
    <td>
      <img src="LunaAssets/Elements/Fire.png" height="30px"> 
      </td>
      
      <td>
      <p>80%</p> 
      </td>
    
      <td>
        <img src="LunaAssets/Elements/Ice.png" height="30px"> 
        </td>
        
        <td>
        <p>120%</p> 
        </td>
    
        <td>
          <img src="LunaAssets/Elements/Poison.png" height="30px"> 
          </td>
          
          <td>
          <p>100%</p> 
          </td>
    
          <td>
            <img src="LunaAssets/Elements/Light.png" height="30px"> 
            </td>
            
            <td>
            <p>50%</p> 
            </td>
    
            <td>
              <img src="LunaAssets/Elements/Dark.png" height="30px"> 
              </td>
              
              <td>
              <p>130%</p> 
              </td>
    
    </tr>
    
    
    
    </table>
    </div>
    </div>
  
    <div id="playerClasses">
      <div id="className">
      <h1>Forsaken</h1>
        <hr>
        </div>
      
      <div id="classDescription">
        <p>A waste of flesh, notable for nothing lest the dust it leaves behind. They have nothing to lose, driven forward only by self-loathing.</p>
        
      </div>
      
      <div id="classStats">
        <table>
      <tr>
      <td>Level</td>
      <td>1</td>
      
      <td>STR</td>
      <td>1</td>
      
      <td>DEX</td>
      <td>1</td>
      </tr>
      <tr>
      <td>HP</td>
      <td>20</td>
      
      <td>DEF</td>
      <td>1</td>
      
      <td>INT</td>
      <td>1</td>
      </tr>
      <tr>
      <td>MP</td>
      <td>10</td>
      
      <td>SPD</td>
      <td>1</td>
      
      <td>RES</td>
      <td>1</td>
      </tr>
      
        </table>
      
        <h2>Vulnerabilities</h2>
        <table>
          
      <tr>
        <td>
      <img src="LunaAssets/Elements/Normal.png" height="30px"> 
      </td>
      
      <td>
      <p>150%</p> 
      </td>
      
      <td>
        <img src="LunaAssets/Elements/Fire.png" height="30px"> 
        </td>
        
        <td>
        <p>100%</p> 
        </td>
      
        <td>
          <img src="LunaAssets/Elements/Ice.png" height="30px"> 
          </td>
          
          <td>
          <p>100%</p> 
          </td>
      
          <td>
            <img src="LunaAssets/Elements/Poison.png" height="30px"> 
            </td>
            
            <td>
            <p>50%</p> 
            </td>
      
            <td>
              <img src="LunaAssets/Elements/Light.png" height="30px"> 
              </td>
              
              <td>
              <p>100%</p> 
              </td>
      
              <td>
                <img src="LunaAssets/Elements/Dark.png" height="30px"> 
                </td>
                
                <td>
                <p>100%</p> 
                </td>
      
      </tr>
      
      
      
      </table>
      </div>
      
      </div>
  
      <div id="playerClasses">
        <div id="className">
        <h1>Knight</h1>
          <hr>
          </div>
        
        <div id="classDescription">
          <p>A valiant warrior, steadfast and determined, albeit lost without a king. They excel at combat and find glory in violence.</p>
        </div>
        
        <div id="classStats">
          <table>
        <tr>
        <td>Level</td>
        <td>10</td>
        
        <td>STR</td>
        <td>14</td>
        
        <td>DEX</td>
        <td>4</td>
        </tr>
        <tr>
        <td>HP</td>
        <td>220</td>
        
        <td>DEF</td>
        <td>10</td>
        
        <td>INT</td>
        <td>4</td>
        </tr>
        <tr>
        <td>MP</td>
        <td>52</td>
        
        <td>SPD</td>
        <td>5</td>
        
        <td>RES</td>
        <td>8</td>
        </tr>
        
          </table>
        
          <h2>Vulnerabilities</h2>
          <table>
            
        <tr>
          <td>
        <img src="LunaAssets/Elements/Normal.png" height="30px"> 
        </td>
        
        <td>
        <p>100%</p> 
        </td>
        
        <td>
          <img src="LunaAssets/Elements/Fire.png" height="30px"> 
          </td>
          
          <td>
          <p>120%</p> 
          </td>
        
          <td>
            <img src="LunaAssets/Elements/Ice.png" height="30px"> 
            </td>
            
            <td>
            <p>100%</p> 
            </td>
        
            <td>
              <img src="LunaAssets/Elements/Poison.png" height="30px"> 
              </td>
              
              <td>
              <p>130%</p> 
              </td>
        
              <td>
                <img src="LunaAssets/Elements/Light.png" height="30px"> 
                </td>
                
                <td>
                <p>50%</p> 
                </td>
        
                <td>
                  <img src="LunaAssets/Elements/Dark.png" height="30px"> 
                  </td>
                  
                  <td>
                  <p>100%</p> 
                  </td>
        
        </tr>
        
        
        
        </table>
        </div>
        
        </div>
  
  
        <div id="playerClasses">
          <div id="className">
          <h1>Royal</h1>
            <hr>
            </div>
          
          <div id="classDescription">
            <p>A child of noble birth, inexperienced but well equipped otherwise. Their lineage fortelling of importance.</p>
          </div>
          
          <div id="classStats">
            <table>
          <tr>
          <td>Level</td>
          <td>6</td>
          
          <td>STR</td>
          <td>3</td>
          
          <td>DEX</td>
          <td>7</td>
          </tr>
          <tr>
          <td>HP</td>
          <td>105</td>
          
          <td>DEF</td>
          <td>6</td>
          
          <td>INT</td>
          <td>6</td>
          </tr>
          <tr>
          <td>MP</td>
          <td>60</td>
          
          <td>SPD</td>
          <td>7</td>
          
          <td>RES</td>
          <td>4</td>
          </tr>
          
            </table>
          
            <h2>Vulnerabilities</h2>
            <table>
              
          <tr>
            <td>
          <img src="LunaAssets/Elements/Normal.png" height="30px"> 
          </td>
          
          <td>
          <p>80%</p> 
          </td>
          
          <td>
            <img src="LunaAssets/Elements/Fire.png" height="30px"> 
            </td>
            
            <td>
            <p>100%</p> 
            </td>
          
            <td>
              <img src="LunaAssets/Elements/Ice.png" height="30px"> 
              </td>
              
              <td>
              <p>100%</p> 
              </td>
          
              <td>
                <img src="LunaAssets/Elements/Poison.png" height="30px"> 
                </td>
                
                <td>
                <p>120%</p> 
                </td>
          
                <td>
                  <img src="LunaAssets/Elements/Light.png" height="30px"> 
                  </td>
                  
                  <td>
                  <p>80%</p> 
                  </td>
          
                  <td>
                    <img src="LunaAssets/Elements/Dark.png" height="30px"> 
                    </td>
                    
                    <td>
                    <p>120%</p> 
                    </td>
          
          </tr>
          
          
          
          </table>
          </div>
          
          </div>
  
          <div id="playerClasses">
            <div id="className">
            <h1>Shinobi</h1>
              <hr>
              </div>
            
            <div id="classDescription">
              <p>A silent deadly shadow, sent into the well to assassinate. They care not for the corpses left behind, only those ahead.</p>
            </div>
            
            <div id="classStats">
              <table>
            <tr>
            <td>Level</td>
            <td>9</td>
            
            <td>STR</td>
            <td>10</td>
            
            <td>DEX</td>
            <td>12</td>
            </tr>
            <tr>
            <td>HP</td>
            <td>145</td>
            
            <td>DEF</td>
            <td>5</td>
            
            <td>INT</td>
            <td>4</td>
            </tr>
            <tr>
            <td>MP</td>
            <td>50</td>
            
            <td>SPD</td>
            <td>15</td>
            
            <td>RES</td>
            <td>4</td>
            </tr>
            
              </table>
            
              <h2>Vulnerabilities</h2>
              <table>
                
            <tr>
              <td>
            <img src="LunaAssets/Elements/Normal.png" height="30px"> 
            </td>
            
            <td>
            <p>100%</p> 
            </td>
            
            <td>
              <img src="LunaAssets/Elements/Fire.png" height="30px"> 
              </td>
              
              <td>
              <p>100%</p> 
              </td>
            
              <td>
                <img src="LunaAssets/Elements/Ice.png" height="30px"> 
                </td>
                
                <td>
                <p>80%</p> 
                </td>
            
                <td>
                  <img src="LunaAssets/Elements/Poison.png" height="30px"> 
                  </td>
                  
                  <td>
                  <p>50%</p> 
                  </td>
            
                  <td>
                    <img src="LunaAssets/Elements/Light.png" height="30px"> 
                    </td>
                    
                    <td>
                    <p>150%</p> 
                    </td>
            
                    <td>
                      <img src="LunaAssets/Elements/Dark.png" height="30px"> 
                      </td>
                      
                      <td>
                      <p>120%</p> 
                      </td>
            
            </tr>
            
            
            
            </table>
            </div>
            
            </div>
    
  
        <div id="playerClasses">
          <div id="className">
          <h1>Thief</h1>
            <hr>
            </div>
          
          <div id="classDescription">
            <p>A hidden figure from a faraway land cast into the well for their crimes. They begin with little but are adept at finding lost treasure</p>
            <p> Unique traits - Monsters have a higher drop rate </p>
          </div>
          
          <div id="classStats">
            <table>
          <tr>
          <td>Level</td>
          <td>5</td>
          
          <td>STR</td>
          <td>5</td>
          
          <td>DEX</td>
          <td>5</td>
          </tr>
          <tr>
          <td>HP</td>
          <td>100</td>
          
          <td>DEF</td>
          <td>5</td>
          
          <td>INT</td>
          <td>5</td>
          </tr>
          <tr>
          <td>MP</td>
          <td>50</td>
          
          <td>SPD</td>
          <td>5</td>
          
          <td>RES</td>
          <td>5</td>
          </tr>
          
            </table>
          
            <h2>Vulnerabilities</h2>
            <table>
              
          <tr>
            <td>
          <img src="LunaAssets/Elements/Normal.png" height="30px"> 
          </td>
          
          <td>
          <p>100%</p> 
          </td>
          
          <td>
            <img src="LunaAssets/Elements/Fire.png" height="30px"> 
            </td>
            
            <td>
            <p>120%</p> 
            </td>
          
            <td>
              <img src="LunaAssets/Elements/Ice.png" height="30px"> 
              </td>
              
              <td>
              <p>100%</p> 
              </td>
          
              <td>
                <img src="LunaAssets/Elements/Poison.png" height="30px"> 
                </td>
                
                <td>
                <p>80%</p> 
                </td>
          
                <td>
                  <img src="LunaAssets/Elements/Light.png" height="30px"> 
                  </td>
                  
                  <td>
                  <p>120%</p> 
                  </td>
          
                  <td>
                    <img src="LunaAssets/Elements/Dark.png" height="30px"> 
                    </td>
                    
                    <td>
                    <p>80%</p> 
                    </td>
          
          </tr>
          
          
          
          </table>
          </div>
          </div>
  
          <div id="playerClasses">
            <div id="className">
            <h1>Undead</h1>
              <hr>
              </div>
            
            <div id="classDescription">
              <p>A discarded corpse, unwanted by the world above yet highly resistand and stubborn.</p>
            </div>
            
            <div id="classStats">
              <table>
            <tr>
            <td>Level</td>
            <td>8</td>
            
            <td>STR</td>
            <td>10</td>
            
            <td>DEX</td>
            <td>4</td>
            </tr>
            <tr>
            <td>HP</td>
            <td>160</td>
            
            <td>DEF</td>
            <td>7</td>
            
            <td>INT</td>
            <td>6</td>
            </tr>
            <tr>
            <td>MP</td>
            <td>64</td>
            
            <td>SPD</td>
            <td>5</td>
            
            <td>RES</td>
            <td>13</td>
            </tr>
            
              </table>
            
              <h2>Vulnerabilities</h2>
              <table>
                
            <tr>
              <td>
            <img src="LunaAssets/Elements/Normal.png" height="30px"> 
            </td>
            
            <td>
            <p>100%</p> 
            </td>
            
            <td>
              <img src="LunaAssets/Elements/Fire.png" height="30px"> 
              </td>
              
              <td>
              <p>200%</p> 
              </td>
            
              <td>
                <img src="LunaAssets/Elements/Ice.png" height="30px"> 
                </td>
                
                <td>
                <p>80%</p> 
                </td>
            
                <td>
                  <img src="LunaAssets/Elements/Poison.png" height="30px"> 
                  </td>
                  
                  <td>
                  <p>50%</p> 
                  </td>
            
                  <td>
                    <img src="LunaAssets/Elements/Light.png" height="30px"> 
                    </td>
                    
                    <td>
                    <p>150%</p> 
                    </td>
            
                    <td>
                      <img src="LunaAssets/Elements/Dark.png" height="30px"> 
                      </td>
                      
                      <td>
                      <p>20%</p> 
                      </td>
            
            </tr>
            
            
            
            </table>
            </div>
            
            </div>
  
  
  <div id="playerClasses">
  <div id="className">
  <h1>Vampire</h1>
    <hr>
    </div>
  
  <div id="classDescription">
    <p>A bloodthirsty creature of the night, awakened by hunger. They are replenished by the shedding of blood but weakened from fire.</p>
    <p> Unique traits - Can heal from Blood Wine and Blood Fountains. Takes damage when submerged in water </p>
  </div>
  
  <div id="classStats">
    <table>
  <tr>
  <td>Level</td>
  <td>9</td>
  
  <td>STR</td>
  <td>8</td>
  
  <td>DEX</td>
  <td>9</td>
  </tr>
  <tr>
  <td>HP</td>
  <td>155</td>
  
  <td>DEF</td>
  <td>7</td>
  
  <td>INT</td>
  <td>7</td>
  </tr>
  <tr>
  <td>MP</td>
  <td>74</td>
  
  <td>SPD</td>
  <td>7</td>
  
  <td>RES</td>
  <td>4</td>
  </tr>
  
    </table>
  
    <h2>Vulnerabilities</h2>
    <table>
      
  <tr>
    <td>
  <img src="LunaAssets/Elements/Normal.png" height="30px"> 
  </td>
  
  <td>
  <p>100%</p> 
  </td>
  
  <td>
    <img src="LunaAssets/Elements/Fire.png" height="30px"> 
    </td>
    
    <td>
    <p>200%</p> 
    </td>
  
    <td>
      <img src="LunaAssets/Elements/Ice.png" height="30px"> 
      </td>
      
      <td>
      <p>80%</p> 
      </td>
  
      <td>
        <img src="LunaAssets/Elements/Poison.png" height="30px"> 
        </td>
        
        <td>
        <p>50%</p> 
        </td>
  
        <td>
          <img src="LunaAssets/Elements/Light.png" height="30px"> 
          </td>
          
          <td>
          <p>150%</p> 
          </td>
  
          <td>
            <img src="LunaAssets/Elements/Dark.png" height="30px"> 
            </td>
            
            <td>
            <p>20%</p> 
            </td>
  
  </tr>
  
  
  
  </table>
  </div>
  </div>
  
  <div id="playerClasses">
    <div id="className">
    <h1>Witch</h1>
      <hr>
      </div>
    
    <div id="classDescription">
      <p>A cunning magic user with a penchant for the dark. They thrive with the waxing of the moon and feed off their own lunacy.</p>
    </div>
    
    <div id="classStats">
      <table>
    <tr>
    <td>Level</td>
    <td>7</td>
    
    <td>STR</td>
    <td>4</td>
    
    <td>DEX</td>
    <td>5</td>
    </tr>
    <tr>
    <td>HP</td>
    <td>85</td>
    
    <td>DEF</td>
    <td>3</td>
    
    <td>INT</td>
    <td>12</td>
    </tr>
    <tr>
    <td>MP</td>
    <td>110</td>
    
    <td>SPD</td>
    <td>6</td>
    
    <td>RES</td>
    <td>6</td>
    </tr>
    
      </table>
    
      <h2>Vulnerabilities</h2>
      <table>
        
    <tr>
      <td>
    <img src="LunaAssets/Elements/Normal.png" height="30px"> 
    </td>
    
    <td>
    <p>100%</p> 
    </td>
    
    <td>
      <img src="LunaAssets/Elements/Fire.png" height="30px"> 
      </td>
      
      <td>
      <p>100%</p> 
      </td>
    
      <td>
        <img src="LunaAssets/Elements/Ice.png" height="30px"> 
        </td>
        
        <td>
        <p>70%</p> 
        </td>
    
        <td>
          <img src="LunaAssets/Elements/Poison.png" height="30px"> 
          </td>
          
          <td>
          <p>100%</p> 
          </td>
    
          <td>
            <img src="LunaAssets/Elements/Light.png" height="30px"> 
            </td>
            
            <td>
            <p>150%</p> 
            </td>
    
            <td>
              <img src="LunaAssets/Elements/Dark.png" height="30px"> 
              </td>
              
              <td>
              <p>80%</p> 
              </td>
    
    </tr>
    
    
    
    </table>
    </div>
    </div>
  
  
  </div>
  
  
  `;
  }