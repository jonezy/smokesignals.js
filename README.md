# Smokesignals

Have this in your page

    <div id="message">
      <a class="close" data-dismiss="alert" href="#">&times;</a>
      <div id="message_content"></div>
    </div>

then do this in js

    <script>
      var smokesignal = new Smokesignals.Signal;
      smokesignal.flash("Your message", "cssClass to apply");
    </script>

# TO DO

* Convert or provide the ability to use in jquery style $('#messages').flash({message:"Great success", css:"alert alert-success"}); ?
