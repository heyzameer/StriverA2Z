package BasicMaths;

public class Countij {


        public static void main(String[] args) {
            // TODO Auto-generated method stub
            int cout = 0;
            first: for( int i = 0; i<=4; i++){
                second: for( int j = 0; i<=4; i++){
                    {
                        if(i==3){
                            continue second;
                        }
                        if(j==2){
                            continue first;
                        }
                        cout++;
                    }

                }
            }
            System.out.println(cout);

        }

    }

