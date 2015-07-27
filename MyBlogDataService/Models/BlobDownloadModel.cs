﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace MyBlogDataService.Models
{
    public class BlobDownloadModel
    {
        public MemoryStream BlobStream { get; set; }
        public string BlobFileName { get; set; }
        public string BlobContentType { get; set; }
        public long BlobLength { get; set; }
    }
}