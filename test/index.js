const {compress, decompress} = require('../dist/lzstring')

const str = `<article>

<hgroup>
<h1>lz-string compression 3</h1>
<h2>JavaScript performance comparison</h2>
</hgroup>

<p class="meta">
	Test case
created by pieroxy 
<time datetime="2013-05-21T22:53:18.000Z" pubdate="">on 2013-5-21</time>

	and last updated <time datetime="2013-05-22T00:50:30.000Z">on 2013-5-22</time>

</p>


<section id="prep-code">
	<h2>Preparation code </h2>

	<pre><code><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"http://pieroxy.net/lzstring/lzstring.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"http://pieroxy.net/lzstring/lzstring3.js?v=5"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="undefined">
<span class="hljs-keyword">var</span> string = <span class="hljs-built_in">document</span>.body.innerHTML; <span class="hljs-comment">// Some big string</span>
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	</code></pre>
</section>

	<section>
		<h2>Preparation code output</h2>
		<div class="user-output">
			


		</div>
	</section>

<section id="runner">
<h2>Test runner</h2>
<p id="firebug"><strong>Warning! For accurate results, please disable Firebug before running the tests. <a href="/faq#firebug-warning">(Why?)</a></strong></p>
<p id="java"><strong>Java applet disabled.</strong></p>
<p id="status">Ready to run.</p>
<div id="controls" class="show"><button id="run" type="button">Run tests</button></div>
<table id="test-table">
<caption>Testing in Chrome 80.0.3987 / Windows 10 0.0.0</caption>
	<thead>
		<tr>
			<th colspan="2">Test</th>
			<th title="Operations per second (higher is better)">Ops/sec</th>
		</tr>
	</thead>
	<tbody>
			<tr>
				<th scope="row" id="title-1" tabindex="0" title="Click to run this test again.">
					<div>
						base
					</div>
				</th>
				<td class="code">
					<pre><code><pre><code class="js">LZString.compress(string);</code></pre></code></pre>
				</td>
				<td id="results-1" class="results" title="">ready</td>
			</tr>
			<tr>
				<th scope="row" id="title-2" tabindex="0" title="Click to run this test again.">
					<div>
						test
					</div>
				</th>
				<td class="code">
					<pre><code><pre><code class="js">LZString3.compress(string);</code></pre></code></pre>
				</td>
				<td id="results-2" class="results" title="">ready</td>
			</tr>
	</tbody>
</table>

</section>

<section>
	<h2 id="results">Compare results of other browsers</h2>
	<p><span id="charts"><strong>Chart type:</strong> <a href="#">bar</a>, <a href="#">column</a>, <a href="#">line</a>, <a href="#">pie</a>, <a href="#">table</a></span><br><span id="filters"><strong>Filter:</strong> <a href="#">popular</a>, <a href="#">all</a>, <a href="#">desktop</a>, <a href="#">family</a>, <a href="#">major</a>, <a href="#">minor</a>, <a href="#">mobile</a>, <a href="#">prerelease</a></span></p><iframe name="bs-chart-frame" id="bs-chart-frame" frameborder="0" scrolling="no"></iframe>
</section>

<section id="revisions">
	<h2>Revisions</h2>
	<p>You can <a href="/lz-string-compression-3/edit" rel="nofollow">edit these tests or add even more tests to this page</a> by appending <code>/edit</code> to the URL.</p>
	<ul>
				<li class="current">
					<a href="/lz-string-compression-3">Revision 1</a>: published pieroxy 
					<time datetime="2013-05-21T22:53:18.000Z" pubdate="">
						on 2013-5-21
					</time>
						and last updated
						<time datetime="2013-05-22T00:50:30.000Z">
							on 2013-5-22
						</time>
				</li>
				<li>
					<a href="/lz-string-compression-3/2">Revision 2</a>: published 
					<time datetime="2013-10-18T15:53:55.000Z" pubdate="">
						on 2013-10-18
					</time>
				</li>
				<li>
					<a href="/lz-string-compression-3/3">Revision 3</a>: published 
					<time datetime="2013-10-18T15:54:57.000Z" pubdate="">
						on 2013-10-18
					</time>
				</li>
				<li>
					<a href="/lz-string-compression-3/4">Revision 4</a>: published 
					<time datetime="2014-05-08T10:26:40.000Z" pubdate="">
						on 2014-5-8
					</time>
				</li>
	</ul>
</section>

<section id="comments">
<h1>0 Comments</h1>

<div id="comments-wrapper">
</div>

		<a class="login" href="/auth/github"><i class="fa fa-github"></i> Login with GitHub to Edit Test Cases</a>
</section>


	</article>

	<footer>
		<ul>
			<li>
				<h4>Sponsors</h4>
				<p>Hosting generously provided by <a href="https://m.do.co/c/b426e15331e8">DigitalOcean</a> and <a href="https://zeit.co/">Zeit</a></p>

				<p><a href="/sponsor">Learn how to become a sponsor</a></p>
			</li>

			<li>
				<h4>Tests</h4>
				<ul>
					<li>
						<a href="/">Add</a>
					</li>


					<li>
						<a href="/browse">Latest</a>
					</li>
					<li>
						<a href="/popular">Popular</a>
					</li>
				</ul>
			</li>

			<li>
				<h4>Info</h4>
				<ul>
					<li>
						<a href="/faq">FAQ</a>
					</li>
					<li>
						<a href="/testimonials">Testimonials</a>
					</li>
					<li>
						<a href="/contributors">Contributors</a>
					</li>
					<li>
						<a href="https://benchmarkjs.com/">Benchmark.js</a>
					</li>
				</ul>
			</li>

			<li>
				<h4>Contact</h4>
				<ul>
					<li>
						<a href="https://twitter.com/jsperf">Twitter</a>
					</li>
					<li>
						<a href="https://github.com/jsperf/jsperf.com">GitHub</a>
					</li>
					<li>
						<a href="https://webchat.freenode.net/?channels=jsperf">IRC</a>
					</li>
				</ul>
			</li>
		</ul>
	</footer>

		<script src="/public/_js/test.js"></script>
		<script>
				ui.browserscope.key = 'agt1YS1wcm9maWxlcnINCxIEVGVzdBjI1NAUDA'

				ui.add(
					'base',
					{
						'defer': false,
						'fn': 'LZString.compress(string);'
					}
				);
				ui.add(
					'test',
					{
						'defer': false,
						'fn': 'LZString3.compress(string);'
					}
				);

		</script>

		<script src="http://pieroxy.net/lzstring/lzstring.js"></script>
<script src="http://pieroxy.net/lzstring/lzstring3.js?v=5"></script>
<script>
var string = document.body.innerHTML; // Some big string
</script>

	<script>
		window._gaq=[['_setAccount','UA-6065217-40'],['_trackPageview']];
		(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.src='https://ssl.google-analytics.com/ga.js';s.parentNode.insertBefore(g,s)}(document,'script'))
	</script>`

const compressed = compress(str)
console.log(compressed)

const decompressed = decompress(compressed)
console.log(decompressed)