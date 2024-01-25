// convert an integer to binary and count how many 1's are in it's binary eqivalent
public class BitCounting {

	public static int countBits(int n){
		String binary = Integer.toBinaryString(n);
    int count = 0;
     
    for (int i = 0; i < binary.length(); i++) {
      if (binary.charAt(i) == '1') {
        count++;
      }
    }
    return count;
      
	}
	
}

// As the name may already reveal, it works basically like a Fibonacci, 
// but summing the last 3 (instead of 2) numbers of the sequence to generate the next.
//  And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(
public class Xbonacci {

    public double[] tribonacci(double[] s, int n) {
        if (n == 0) {
            return new double[0];
        }


        double[] result = new double[n];
      
        for (int i = 0; i < 3 && i < n; i++) {
              result[i] = s[i];
          }
      
        for (int i = 3; i < n; i++) {
          result[i] = result[i - 1] + result[i - 2] + result[i - 3];
        }
      
      return result;

    }
  }

  // Complete the function that accepts a string parameter, 
  // and reverses each word in the string. All spaces in the string should be retained.

public class Kata
{
  public static String reverseWords(final String original)
  {
    String[] words = original.split(" ");
    //string builder is a mutable string of characters     
    StringBuilder reversedString = new StringBuilder();
    
    for (String word: words) {
      StringBuilder reversedWord = new StringBuilder(word).reverse();
      reversedString.append(reversedWord).append(" ");
    }
    
    return reversedString.toString().trim();
  }
}

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. 

// We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. 

// It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
class Solution {
    public static String whoLikesIt(String... names) {
        int length = names.length;
        if (length == 0) {
            return "no one likes this";
        } else if (length == 1) {
            return names[0] + " likes this";
        } else if (length == 2) {
            return names[0] + " and " + names[1] + " like this";
        } else if (length == 3) {
            return names[0] + ", " + names[1] + " and " + names[2] + " like this";
        } else {
           return names[0] + ", " + names[1] + " and " + (length - 2) + " others like this";
        }
    }
}

// Complete the solution so that it splits the string into pairs of two characters. 
// If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
public class StringSplit {
  public static String[] solution(String s) {
      int n = s.length();
      int resultLength = (n % 2 == 0) ? n/2 : n/2 + 1;
      String[] result = new String[resultLength];
      for (int i = 1, j = 0; i <= n; i += 2, j++) {
        if(i == n) {
          result[j] = s.substring(i-1) + "_";
        } else {
            String str = s.substring(i-1, i+1);
            result[j] = str;
        }

      }
    System.out.print(result);
    return result;
  }
}
