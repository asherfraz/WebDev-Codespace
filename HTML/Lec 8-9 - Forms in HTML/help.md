
HOMEWORK done!
1> to covert the p tag from box to inline we just need to add one line style="display: inline"; 
2> to set and default lable on select tag we specify a option with value empty so it will get displayed by default

and i learned a lot in past 3 days about HTML and css and because of you bhaiya i made 3 login pages with good amount of beutification and now im so confidant. thank you <3.

----------------------------------------


1. Setting the default value for an HTML <select> element:
                <select name="Education" id="edu" required>
                <option value="nil" selected>---latest degree---</option>
                <option value="phd">Doctor of Philosophy</option>
                <option value="ms">Masters</option>
                <option value="bs">Bachelors</option>
                </select>
In the option tag you can add a attribute called "selected" to display on the drop-down menu.
2. Also, throughout the form you can add a Boolean attribute called "required" to make that form field compulsory to submit the form. Example:
<label for="name"><b>Enter your Name</b></label>
<input type="text"  id="name" required>