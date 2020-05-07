<?php include('file.php') ?> <!--скрипт для отображения директории -->

<!doctype html>
    <html>

    <head>
        <title>File list</title>
    </head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="code.js"></script>
    <body>
        <h3> You logged as: <?php echo $username; ?></h3>
        <a href="../login/index.html">Log out</a>
        <h2>Choose your file:</h2>
            <ul>
                <p>
                  <!--демонстрация списка файлов -->
                     <?php echo $msg ?> 
                </p>
            </ul>
<!--dropdown list of the files -->
   <div class="container" style="width:200px;">
    <select name="valueTag"  id="valueTag" class="form-control input-lg">
      <!--Options for user's files-->
    <option value="Select file">Select file</option>
    <option value=""><?php echo $filenames; ?></option>
    
    </select>
 </div>

 <form action="link">
    <input type="submit" value= "Googla">
</form>




 
    </body>
    </html>