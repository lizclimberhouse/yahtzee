json.array! @scores do |score|
  user = User.find(score.user_id)
  json.id score.id
  json.score score.value
  json.created_at score.created_at
  json.email user.email
  json.nickname user.nickname
end

# only use the ! when we are sending back an array that ...?
# here we are done with the server side.