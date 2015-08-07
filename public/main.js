function loadmain() {
    document.getElementById("ie").onclick = process;
    document.getElementById("chrome").onclick = process;
    document.getElementById("firefox").onclick = process;
    document.getElementById("safari").onclick = process;
    document.getElementById("opera").onclick = process;
    document.getElementById("process").onclick = process;
}

function clearMsg() {
    var text = document.getElementById("table");
    text.innerHTML = "";
}

function process() {
    var options = document.getElementsByName("broswers");
    var i;
    for (i = 0; i < options.length; i++) {
        if (options[i].checked) {
            //resetting div for more than once run of code
            document.getElementById("table").innerHTML = "";
            //check selections and change text based on it
            if (options[i].id == "ie") {
                document.getElementById("table").innerHTML = 
                "  <select name=\"selection\">"+
                " <option  value=\"6\">6</option>"+
                " <option  value=\"7\">7</option>"+
                " <option  value=\"8\">8</option>"+
                " <option  value=\"9\">9</option>"+
                " <option  value=\"10\">10</option>"+
                " <option  value=\"11\">11</option>"+
                " </select> ";
            } else if (options[i].id == "chrome") {
                document.getElementById("table").innerHTML =
                "  <select name=\"selection\">"+
                " <option  value=\"1\">1</option>"+
                " <option  value=\"2\">2</option>"+
                " <option  value=\"3\">3</option>"+
                " <option  value=\"4\">4</option>"+
                " <option  value=\"5\">5</option>"+
                " <option  value=\"6\">6</option>"+
                " <option  value=\"7\">7</option>"+
                " <option  value=\"8\">8</option>"+
                " <option  value=\"9\">9</option>"+
                " <option  value=\"10\">10</option>"+
                " <option  value=\"11\">11</option>"+
                " <option  value=\"12\">12</option>"+
                " <option  value=\"15\">15</option>"+
                " <option  value=\"16\">16</option>"+
                " <option  value=\"17\">17</option>"+
                " <option  value=\"18\">18</option>"+
                " <option  value=\"19\">19</option>"+
                " <option  value=\"20\">20</option>"+
                " <option  value=\"21\">21</option>"+
                " <option  value=\"22\">22</option>"+
                " <option  value=\"23\">23</option>"+
                " <option  value=\"24\">24</option>"+
                " <option  value=\"25\">25</option>"+
                " <option  value=\"26\">26</option>"+
                " <option  value=\"27\">27</option>"+
                " <option  value=\"28\">28</option>"+
                " <option  value=\"29\">29</option>"+
                " <option  value=\"30\">30</option>"+
                " <option  value=\"31\">31</option>"+
                " <option  value=\"32\">32</option>"+
                " <option  value=\"33\">33</option>"+
                " <option  value=\"34\">34</option>"+
                " <option  value=\"35\">35</option>"+
                " <option  value=\"36\">36</option>"+
                " <option  value=\"37\">37</option>"+
                " <option  value=\"38\">38</option>"+
                " <option  value=\"39\">39</option>"+
                " <option  value=\"40\">40</option>"+
                " <option  value=\"41\">41</option>"+
                " <option  value=\"42\">42</option>"+
                " <option  value=\"43\">43</option>"+
                " </select> ";
            } else if (options[i].id == "firefox") {
                document.getElementById("table").innerHTML =
                "  <select name=\"selection\">"+
                " <option  value=\"10\">10</option>"+
                " <option  value=\"11\">11</option>"+
                " <option  value=\"12\">12</option>"+
                " <option  value=\"15\">15</option>"+
                " <option  value=\"16\">16</option>"+
                " <option  value=\"17\">17</option>"+
                " <option  value=\"18\">18</option>"+
                " <option  value=\"19\">19</option>"+
                " <option  value=\"20\">20</option>"+
                " <option  value=\"21\">21</option>"+
                " <option  value=\"22\">22</option>"+
                " <option  value=\"23\">23</option>"+
                " <option  value=\"24\">24</option>"+
                " <option  value=\"25\">25</option>"+
                " <option  value=\"26\">26</option>"+
                " <option  value=\"27\">27</option>"+
                " <option  value=\"28\">28</option>"+
                " <option  value=\"29\">29</option>"+
                " <option  value=\"30\">30</option>"+
                " <option  value=\"31\">31</option>"+
                " <option  value=\"32\">32</option>"+
                " <option  value=\"33\">33</option>"+
                " <option  value=\"34\">34</option>"+
                " <option  value=\"35\">35</option>"+
                " <option  value=\"36\">36</option>"+
                " <option  value=\"37\">37</option>"+
                " <option  value=\"38\">38</option>"+
                " </select> ";
            } else if (options[i].id == "safari") {
                /*
                    document.getElementById("table").innerHTML = "safari versions: 4, 5.0.5, 5.1";
                */
                document.getElementById("table").innerHTML =
                "  <select name=\"selection\">"+
                " <option  value=\"4\">4</option>"+
                " <option  value=\"5.0.1\">5.0.1</option>"+
                " <option  value=\"5.1\">5.1</option>"+
                " </select> ";
            } else if (options[i].id == "opera"){
                document.getElementById("table").innerHTML = 
                "  <select name=\"selection\">"+
                " <option  value=\"10\">10.5</option>"+
                " <option  value=\"10.5\">10.5</option>"+
                " <option  value=\"11\">11</option>"+
                " <option  value=\"11.5\">11.5</option>"+
                " <option  value=\"11.6\">11.6</option>"+
                " <option  value=\"12\">12</option>"+
                " <option  value=\"15\">15</option>"+
                " <option  value=\"16\">16</option>"+
                " <option  value=\"17\">17</option>"+
                " <option  value=\"18\">18</option>"+
                " <option  value=\"19\">19</option>"+
                " <option  value=\"20\">20</option>"+
                " <option  value=\"21\">21</option>"+
                " <option  value=\"22\">22</option>"+
                " <option  value=\"23\">23</option>"+
                " <option  value=\"24\">24</option>"+
                " <option  value=\"25\">25</option>"+
                " <option  value=\"26\">26</option>"+
                " <option  value=\"27\">27</option>"+
                " <option  value=\"28\">28</option>"+
                " <option  value=\"29\">29</option>"+
                " </select> ";
            }
        }
    }
}
       