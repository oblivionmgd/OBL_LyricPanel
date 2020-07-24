function OBL_LyricPanel(thisObj){
    var chooseBtn;
    var clearBtn;
    var lyric;

    var lyricContent = "";
    var lyricPanel = (thisObj instanceof Panel)? thisObj : new Window("palette", "OBL_LyricPanel", undefined, {resizeable : true});


    var myToolsPanel = createUI(thisObj);
    if(this instanceof Panel)
        myToolsPanel.show();

    function createUI(thisObj){

        try{
            var buttonGroup = lyricPanel.add("group", [10,10,150,60], 'buttonGroup');
            chooseBtn = buttonGroup.add("button", [10, 10, 80, 40], "Load Lyric :");
            clearBtn = buttonGroup.add("button", [10, 10, 80, 40], "clear");

        }
        catch(e){
            alert(e);
        }

        return myPanel;
    }

    chooseBtn.onClick = function LoadLyric(){
        filename = File.openDialog("Choose File");
        fileObj = new File(filename);
        var flag = 0;


        if(fileObj.open("r")){
            while(!fileObj.eof){
                lyricContent += fileObj.readln() + "\r\n";
            }
            fileObj.close();
            flag = 1;
        }
        
        lyric = lyricPanel.add("edittext", [10,50,300,250], lyricContent, {multiline: true});
        
    }
    clearBtn.onClick = function clearlyric (){
        lyric.parent.remove(lyric);
        lyricPanel.layout.layout(true);
        lyricPanel.layout.resize();
    }

    lyricPanel.onResize = function resize() {
        lyricPanel.layout.resize(); 
    }
}

OBL_LyricPanel(this);