    //This program is free software: you can redistribute it and/or modify
    //it under the terms of the GNU General Public License as published by
    //the Free Software Foundation, either version 3 of the License, or
    //(at your option) any later version.

    //This program is distributed in the hope that it will be useful,
    //but WITHOUT ANY WARRANTY; without even the implied warranty of
    //MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    //GNU General Public License for more details.

    //You should have received a copy of the GNU General Public License
    //along with this program.  If not, see <https://www.gnu.org/licenses/>.


// ==Possibly defunct==
// This file may not be necessary

// this is a temporary js file to keep things organized before I write the stuff
// to put the json into elements
// todo: handle other request parameters than c and figure out what
// a typical response from results-ranking will look like
var json_parse = function () {
    var at,
    ch,
    escapee = {
        '"': '"',
        '/': '/',
        b: 'b',
        f: '\f',
        n: '\n',
        r: '\r',
        t: '\t',
    },
    text,
    
    error = function(m) {
        
        throw {
            name:   'syntaxError',
            message: m,
            at:      at,
            text:     text
        };
    },
    
    next = function(c) {
    // if a c parameter is provided, check that it matches the current character
    if (c && c !== ch) {
        error("Expected '"+c+", instead of '"+ch+"'");
    // get the next character. when there are no more characters,
    // return the empty string
    ch = text.charAt(at);
    at += 1;
    return ch;
    }
    
    number = function () {
    //parse a number value
    
    var number,
        string = '';
        
    if (ch === '-') {    
        string = '-';
        next('-');
    }  
    while (ch >= '0' && ch <= '9') {
        string += ch;
        next();
    }    
    if (ch === '.') {
        string += '.';
        while(next() && ch >= '0' && ch <= '9') {
            string += ch;
        }
    if (ch ==='e' || ch === 'E') {
        string += ch;
        next();
    if (ch === '-' || ch === '+') {
        string += ch;
        next();
        }
    }
    while (ch >= '0' && ch <= '9') {
        string += ch;
        next();
        
        
    }
        
    }
    number = +string;
    if (isNaN(number)) {
        error("Bad Number");
    } else { 
        return number;
    }
    },
    
    string = function() {
   // TODO: Handle strings
    };
    };
};
