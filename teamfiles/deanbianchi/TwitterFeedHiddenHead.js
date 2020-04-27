<t4 type="media" id="65355" formatter="javascript/*"/>
<t4 type="media" id="65356" formatter="javascript/*"/>
<script type="text/javascript">
function handleTweets<t4 type="meta" meta="content_id" />(tweets) {
    var html = '<ul id="tweets<t4 type="meta" meta="content_id" />" class="tweets">';
    for (var tweet in tweets) {
        var t = tweets[tweet];
        t = t.replace('<p class="tweet">','');
        t = t.replace('</p>','');

        html += '<li class="tweet">' + t + '</li>';
    }
    html += '</ul>';
    $('#tweetHolder<t4 type="meta" meta="content_id" />').html(html);
    $('#tweetHolder<t4 type="meta" meta="content_id" />').vTicker({'pause':'7000'});
}

$(document).ready(function(e) {
    twitterFetcher.fetch('<t4 type="content" name="Fetch ID" output="normal" modifiers="striptags"  />', '', <t4 type="content" name="Number of Items to Display" output="normal" modifiers=""  />, true, false, false, '', false, handleTweets<t4 type="meta" meta="content_id" />, false);
});

</script>