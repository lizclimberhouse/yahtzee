class Score < ApplicationRecord
  belongs_to :user

  #Score.all_scores
  def self.all_scores
    select('value, user_id, u.email, scores.id') # this u. is set in the below line
          # need to join my scores table on my user table to find their email  
    joins('INNER JOIN users u ON u.id = scores.user.id') 
      .order(value: :desc)
          # need to join no the forigin key.
          # the below jbuilder option : hundreds of calls to the db to get the user. The above option only uses 1 call to the database for the user. 
          # this is way more effient then jbuilder which looked like: # json.array! @scores do |score|
                                                                        # user = User.find(score.user_id)
                                                                        # json.value score.value
                                                                        # json.user_id = user.idsjson.email = user.email
                                                                        # json.id = score.id
  end
end
