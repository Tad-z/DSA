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